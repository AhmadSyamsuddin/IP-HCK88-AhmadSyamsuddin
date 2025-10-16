// Jalankan sekali di awal semua test
beforeAll(() => {
  process.env.JWT_SECRET = 'Medd';
  process.env.GEMINI_API_KEY = 'AIzaSyCyjQHSepP-y5Ct-5IGwPU4VkLFLFB498E';
  process.env.GOOGLE_CLIENT_ID = '762357752163-vs5bp3p7mmgqd46pfs841h37982c690i.apps.googleusercontent.com';
  process.env.MIDTRANS_SERVER_KEY = 'Mid-server-yemyXMnbSTc3gXjubvJC7pS3';
  process.env.MIDTRANS_CLIENT_KEY = 'Mid-client-q2x9zvfWuxZb2NFG';
  process.env.CLIENT_URL = 'http://localhost:5173';
});

afterAll(() => {
  jest.clearAllMocks();
});

describe('Test Setup', () => {
  test('environment variables should be set', () => {
    expect(process.env.JWT_SECRET).toBe('Medd');
    expect(process.env.GEMINI_API_KEY).toBeDefined();
    expect(process.env.GOOGLE_CLIENT_ID).toBeDefined();
    expect(process.env.MIDTRANS_SERVER_KEY).toBeDefined();
    expect(process.env.MIDTRANS_CLIENT_KEY).toBeDefined();
    expect(process.env.CLIENT_URL).toBe('http://localhost:5173');
  });
});