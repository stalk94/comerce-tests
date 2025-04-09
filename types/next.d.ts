import { NextRequest, NextResponse } from 'next/server';
import { Server } from 'socket.io';

declare module 'next/server' {
	interface NextRequest {
		socket: {
			server: {
				io?: Server;
			};
		};
	}

	interface NextResponse {
		socket: {
			server: {
				io?: Server;
			};
		};
	}
}