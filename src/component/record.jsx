import React, { useState } from 'react';
import { ReactMic } from 'react-mic';


const Record = () => {
  const [record, setRecord] = useState(false);
  const [audioData, setAudioData] = useState(null);

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    setAudioData(recordedBlob);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Record Your Voice</h1>
        <div className="flex justify-center mb-6">
          <ReactMic
            record={record}
            className="sound-wave"
            onStop={onStop}
            onData={onData}
            strokeColor="#000000"
            backgroundColor="#FF4081"
          />
        </div>
        <div className="flex justify-between mb-6">
          <button
            onClick={startRecording}
            className={`flex-1 ${record ? 'bg-gray-400' : 'bg-blue-500'} text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-200 ease-in-out mx-1`}
            disabled={record}
          >
            Start
          </button>
          <button
            onClick={stopRecording}
            className={`flex-1 ${!record ? 'bg-gray-400' : 'bg-red-500'} text-white px-4 py-2 rounded shadow hover:bg-red-600 transition duration-200 ease-in-out mx-1`}
            disabled={!record}
          >
            Stop
          </button>
        </div>
        {audioData && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Playback</h3>
            <audio controls src={audioData.blobURL} className="w-full rounded shadow"></audio>
          </div>
        )}
      </div>
    </div>
  );
};

export default Record;