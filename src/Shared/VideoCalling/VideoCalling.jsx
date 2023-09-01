import React, { useRef, useEffect, useState } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';
import { BsFillMicMuteFill, BsMicFill } from 'react-icons/bs'
import { MdVideocam, MdVideocamOff } from 'react-icons/md'
import { TiUpload } from 'react-icons/ti'


export const VideoCalling = () => {
    const localVideoRef = useRef();
    const remoteVideoRef = useRef();

    const [localStream, setLocalStream] = useState(null);
    const [isSharingScreen, setIsSharingScreen] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(false);
    const [isAudioMuted, setIsAudioMuted] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const divRef = useRef()
    // const socket = io('ws://localhost:8000/ws/sc/'); // Your signaling server URL

    let peer;

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                setLocalStream(stream)
                localVideoRef.current.srcObject = stream;
                peer = new Peer({ initiator: true, stream: stream });

                // Handle signaling messages
                peer.on('signal', (data) => {
                    //   socket.emit('offer', data);
                });

                // Handle remote stream
                peer.on('stream', (remoteStream) => {
                    remoteVideoRef.current.srcObject = remoteStream;
                });
            })
            .catch((error) => {
                console.error('Error accessing user media:', error);
            });

        // Handle offer from other user
        // socket.on('offer', (offer) => {
        //     peer.signal(offer);
        //   });

    }, [isVideoOn])



    // default video carmara off
    localStream?.getVideoTracks().forEach(track => {
        track.enabled = !isVideoOn; // Toggle video track
    });

    const startScreenSharing = () => {
        navigator.mediaDevices.getDisplayMedia({ video: true })
            .then((stream) => {
                // Replace the camera stream with the screen sharing stream
                // Update the peer connection with the new stream

                // Update the local stream state for rendering
                setLocalStream(stream);
                setIsSharingScreen(true);
            })
            .catch((error) => {
                console.error('Error accessing screen:', error);
            });
    };

    const stopScreenSharing = () => {
        // Replace the screen sharing stream with the camera stream
        // Update the peer connection with the new stream

        // Update the local stream state for rendering
        setLocalStream(localStream);
        setIsSharingScreen(false);
    };

    const toggleVideo = () => {
        if (localStream) {
            localStream.getVideoTracks().forEach(track => {
                track.enabled = !isVideoOn; // Toggle video track
            });
            setIsVideoOn(!isVideoOn);
        }
    };

    const toggleAudio = () => {
        // if (localStream) {
        //     localStream.getAudioTracks().forEach(track => {
        //         track.enabled = !isAudioMuted; // Toggle audio track
        //     });
            setIsAudioMuted(!isAudioMuted);
        // }
    };

    // moveabel div
    const handleMouseDown = (event) => {
        setIsDragging(true);
        const offsetX = event.clientX - position.x;
        const offsetY = event.clientY - position.y;
        setDragOffset({ x: offsetX, y: offsetY });
    };


    const handleMouseMove = (event) => {
        if (!isDragging) return;
        const containerRect = divRef.current.getBoundingClientRect();
        const minX = 0;
        const minY = 0;
        const maxX = containerRect.width - 340; // Assuming width and height of the movable div
        const maxY = containerRect.height - 340;

        console.log(maxX, maxY)

        const x = Math.min(maxX, Math.max(minX, event.clientX - dragOffset.x));
        const y = Math.min(maxY, Math.max(minY, event.clientY - dragOffset.y));

        setPosition({ x, y });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className='video-screens'>
            <div className="relative" ref={divRef}>
                <video className='bg-slate-900 w-screen h-screen' ref={remoteVideoRef} autoPlay />

                <div className={`${!isVideoOn?'block':'hidden'} absolute w-1/4 top-5 right-5`}
                    style={{ top: position.y, left: position.x, transform: 'scaleX(-1)' }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    >

                    <video
                        ref={localVideoRef} autoPlay muted={!isAudioMuted}
                    />
                </div>



                <div className="btn-groups absolute bottom-5 w-full">
                    <div className="flex justify-center items-center gap-4 w-full">
                        {isSharingScreen ? (
                            <button className={`${isVideoOn ? 'bg-red-600' : 'bg-slate-800'} flex justify-center items-center text-slate-50 h-12 w-12 rounded-full  hover:bg-red-500`} onClick={stopScreenSharing}><TiUpload /></button>
                        ) : (
                            <button className='bg-slate-800 flex justify-center items-center text-slate-50 h-12 w-12 rounded-full  hover:bg-red-500' onClick={startScreenSharing}><TiUpload /></button>
                        )}

                        <button onClick={toggleVideo} className={`${isVideoOn ? 'bg-red-600' : 'bg-slate-800'} flex justify-center items-center text-slate-50 h-12 w-12 rounded-full  hover:bg-red-500`}>
                            {isVideoOn ? <MdVideocamOff /> : <MdVideocam />}
                        </button>

                        <button onClick={toggleAudio} className={`${!isAudioMuted ? 'bg-red-600' : 'bg-slate-800'} flex justify-center items-center text-slate-50 h-12 w-12 rounded-full hover:bg-red-500`}>
                            {!isAudioMuted ? <BsFillMicMuteFill /> : <BsMicFill />}
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}
