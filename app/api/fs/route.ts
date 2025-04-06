import fs from 'fs';
import path from 'path';


export async function POST(req) {
    try {
        const { filepath, content } = await req.json();

        if (!filepath || !content) {
            return new Response(JSON.stringify({ error: 'Filename and content are required' }), { status: 400 });
        }

        // Указываем путь для записи файла
        const filePath = path.join(process.cwd(), filepath);

        // Создаём папку, если её нет
        const dirPath = path.dirname(filePath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Записываем данные в файл
        fs.writeFileSync(filePath, content, 'utf-8');

        return new Response(JSON.stringify({ message: 'File written successfully' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to write file', details: error.message }), { status: 500 });
    }
}

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);  // Извлекаем параметры из URL
        const filepath = searchParams.get('file');

        if (!filepath) {
            return new Response(
                JSON.stringify({ error: 'File name is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const filePath = path.join(process.cwd(), filepath);
        const fileContent = await fs.promises.readFile(filePath, 'utf8');
    
        // Возвращаем содержимое файла
        return new Response(JSON.stringify({ content: fileContent }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } 
    catch (error) {
        return new Response(
            JSON.stringify({ error: 'Error reading the file' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
  }