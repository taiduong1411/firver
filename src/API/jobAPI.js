import fetcher from "./fetcher";

// API lấy menu loại công việc
const getJobTypeMenuAPI = async () => {
  try {
    const response = await fetcher.get("/cong-viec/lay-menu-loai-cong-viec");
    return response.data.content;
  } catch (error) {
    console.log(`FE Error:${error}`);
  }
};

// API lấy danh sách công việc theo tên/{tênCôngViệc}
const getListJobByName = async (nameJob) => {
  try {
    const response = await fetcher.get(
      "/cong-viec/lay-danh-sach-cong-viec-theo-ten/%22I%20will%20write%20simple%202and%20interesting%20content%20for%20your%20website%22",
      nameJob
    );
    return response.data.content;
  } catch (error) {
    console.log(`FE Error:${error}`);
  }
};
// API lấy công việc theo chi tiết loại
const getJobByTypeDetails = async (maChiTietLoai) => {
  try {
    const response = await fetcher.get(
      "/cong-viec/lay-cong-viec-theo-chi-tiet-loai",
      maChiTietLoai
    );
    return response.data.content;
  } catch (error) {
    console.log(`FE Error:${error}`);
  }
};

// API lấy chi tiết loại công việc
const layChiTietLoaiCongViec = async (maLoaiCongViec) => {
  try {
    const response = await fetcher.get(
      "/cong-viec/lay-menu-loai-cong-viec",
      maLoaiCongViec
    );
    return response.data.content;
  } catch (error) {
    console.log(`FE Error:${error}`);
  }
};
// Lấy công việc chi tiết

const layCongViecChiTiet = async (maCongViec) => {
  try {
    const response = await fetcher.get(
      "/cong-viec/lay-cong-viec-chi-tiet",
      maCongViec
    );
    return response.data.content;
  } catch (error) {
    console.log(`FE Error:${error}`);
  }
};
export {
  getJobTypeMenuAPI,
  getListJobByName,
  getJobByTypeDetails,
  layChiTietLoaiCongViec,
  layCongViecChiTiet,
};
