import { NextRequest, NextResponse } from 'next/server';
import { Server } from 'socket.io';



export async function GET(req: NextRequest, res: NextResponse) {
    if (!res.socket.server.io) {
        console.log('socket connect');
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on('connection', (socket) => {
            console.log('User connected');


            socket.on('disconnect', () => {
                console.log('User disconnected');
            });
        });
    }
}