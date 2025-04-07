import fs from 'fs';
import path from 'path';


const catalogs = [
    { id: 'luki', image: 'images/4.png', title: 'Люки выхода на кровлю' },
    { id: 'luki2', image: 'images/3.png', title: 'Люки выхода на что то' }
];



export async function POST(req) {
    try {

       
    } 
    catch (error) {
        return new Response(JSON.stringify(
            { error: 'Error', details: error.message }), 
            { status: 500 }
        );
    }
}

export async function GET(req) {
    try {
        
        
        return new Response(
            JSON.stringify(catalogs), 
            { headers: { 'Content-Type': 'application/json' },
        });
    } 
    catch (error) {
        return new Response(
            JSON.stringify({ error: 'Error reading the file' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
  }