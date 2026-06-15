export const config = {
  runtime: 'nodejs',
};

export default async function handler(req, res) {
  try {
    // Import Nitro server
    const { default: server } = await import('../dist/server/index.mjs');
    
    // Create a Web API Request from Node.js request
    const url = `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers.host}${req.url}`;
    const fetchRequest = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
    });
    
    // Call the server handler
    const response = await server.fetch(fetchRequest);
    
    // Set response headers
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });
    
    res.status(response.status);
    res.send(await response.text());
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}
