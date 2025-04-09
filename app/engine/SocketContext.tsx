'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';


const SocketContext = createContext<Socket | null>(null);
export const useSocket = () => {
    return useContext(SocketContext);
}


export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

	useEffect(() => {
		const socketInstance = io();
		setSocket(socketInstance);

		return () => {
			socketInstance.disconnect();
		}
	}, []);

	return (
		<SocketContext.Provider value={socket}>
			{ children }
		</SocketContext.Provider>
	);
}