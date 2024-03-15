const axios = require('axios');

// Định nghĩa URL của API và URL của proxy
const apiUrl = 'https://example.com/api';
const proxyUrl = 'https://your-proxy-url.com';

// Tạo một phiên axios và cấu hình nó để sử dụng proxy
const axiosInstance = axios.create({
  baseURL: proxyUrl,
  // Bổ sung các tùy chọn khác nếu cần thiết, ví dụ: timeout, headers, etc.
});

// Tạo một endpoint để gửi yêu cầu đến API thông qua proxy
async function fetchDataFromApi(endpoint) {
  try {
    const response = await axiosInstance.get(apiUrl + endpoint);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi gửi yêu cầu đến API:', error);
    throw error;
  }
}

// Sử dụng endpoint để lấy dữ liệu từ API
(async () => {
  try {
    const data = await fetchDataFromApi('/exampleEndpoint');
    console.log('Dữ liệu từ API:', data);
  } catch (error) {
    console.error('Đã xảy ra lỗi:', error);
  }
})();
