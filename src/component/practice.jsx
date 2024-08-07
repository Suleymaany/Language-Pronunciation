import React, { useState, useRef } from 'react'; // Include useRef here
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Practice() {
  const [audioURL, setAudioURL] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const mediaRecorderRef = useRef(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div className="text-center text-red-500">Your browser does not support speech recognition.</div>;
  }

  const handleStartRecording = async () => {
    resetTranscript();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.start();
      setIsRecording(true);

      const audioChunks = [];
      mediaRecorderRef.current.addEventListener('dataavailable', event => {
        audioChunks.push(event.data);
      });

      mediaRecorderRef.current.addEventListener('stop', () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        stream.getTracks().forEach(track => track.stop()); // Stop all tracks to release the mic
      });

      SpeechRecognition.startListening();
    } catch (error) {
      console.error("Error accessing the microphone or starting recording:", error);
    }
  };

  const handleStopRecording = () => {
    SpeechRecognition.stopListening();
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Practice Pronunciation</h1>
        {audioURL && (
          <AudioPlayer
            src={audioURL}
            onPlay={() => console.log('onPlay')}
            className="mb-6 rounded-lg overflow-hidden"
          />
        )}
        <div className="flex justify-between mb-6">
          <button
            onClick={handleStartRecording}
            className={`flex-1 ${isRecording ? 'bg-gray-400' : 'bg-blue-500'} text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-200 ease-in-out mx-1`}
            disabled={isRecording}
          >
            Start
          </button>
          <button
            onClick={handleStopRecording}
            className={`flex-1 ${!isRecording ? 'bg-gray-400' : 'bg-red-500'} text-white px-4 py-2 rounded shadow hover:bg-red-600 transition duration-200 ease-in-out mx-1`}
            disabled={!isRecording}
          >
            Stop
          </button>
          <button
            onClick={resetTranscript}
            className="flex-1 bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600 transition duration-200 ease-in-out mx-1"
          >
            Reset
          </button>
        </div>
        <div className="mt-4 p-4 bg-yellow-100 rounded-lg shadow-inner">
          <p className="text-lg text-gray-700 text-center mb-2">Transcript:</p>
          <p className="text-lg text-gray-900 text-center font-semibold">{transcript}</p>
        </div>
      </div>
    </div>
  );
}

export default Practice;