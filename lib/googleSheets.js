import { google } from 'googleapis';

export async function fetchMovies() {
  try {
    if (!process.env.N7) {
      throw new Error('Missing N7 environment variable');
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.N7),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: 'N7_IMDB_DATA',
      range: 'Sheet1!A2:F', // Assuming columns are ID, Title, ReleaseDate, PosterURL, TrailerID, ArticleHTML
    });

    const rows = response.data.values;
    if (rows && rows.length) {
      return rows.map((row) => ({
        id: row[0],
        title: row[1],
        releaseDate: row[2],
        posterUrl: row[3],
        trailerId: row[4],
        articleHtml: row[5],
      }));
    }
    return [];
  } catch (error) {
    console.error('Failed to fetch from Google Sheets, using mock data:', error);
    return [
      {
        id: '1',
        title: 'Cyber Void',
        releaseDate: '2026',
        posterUrl: 'https://images.unsplash.com/photo-1618519764620-7403abdbdf9c',
        trailerId: 'dQw4w9WgXcQ',
        articleHtml: '<h1>Extreme Data</h1><p>Classified intel loaded.</p>'
      },
      {
        id: '2',
        title: 'Neon Syndicate',
        releaseDate: '2027',
        posterUrl: 'https://images.unsplash.com/photo-1550745165-943b3816f84d',
        trailerId: 'dQw4w9WgXcQ',
        articleHtml: '<h1>Shadow Operations</h1><p>The city never sleeps.</p>'
      },
      {
        id: '3',
        title: 'Chrono Glitch',
        releaseDate: '2028',
        posterUrl: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5',
        trailerId: 'dQw4w9WgXcQ',
        articleHtml: '<h1>Temporal Anomaly</h1><p>Time is a weapon.</p>'
      },
    ];
  }
}
