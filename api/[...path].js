export const config = {
  runtime: 'nodejs20.x',
};

export default async function handler(req, res) {
  try {
    // Import server at runtime
    const mod = await import('../dist/server/server.js');
    const server = mod.default || mod;
    
    const response = await server.fetch(req);
    
    // Set response headers
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });
    
    res.status(response.status).send(await response.text());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}
