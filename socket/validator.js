import yup from "yup"

export const usernameValidator = yup
  .string()
  .required("Tên người dùng là bắt buộc")
  .min(4, "Tên người dùng không thể ít hơn 4 ký tự")
  .max(20, "Tên người dùng không thể vượt quá 20 ký tự")

export const inviteCodeValidator = yup
  .string()
  .required("Mã mời là bắt buộc")
  .length(6, "Mã mời không hợp lệ")
