# 💐 Website Chúc Mừng 20/10 - Falling Flowers Interactive

Website tương tác đặc biệt dành tặng người phụ nữ bạn yêu quý nhân dịp 20/10.

![Preview](preview.png)

## ✨ Tính Năng

- 🌸 **Hiệu ứng hoa rơi tương tác**: Click vào các bông hoa để nhận lời chúc
- 🎨 **Background gradient động**: Màu sắc chuyển động mượt mà
- 💖 **Modal lời nhắn đặc biệt**: Gửi thông điệp riêng tư
- 🎵 **Music player**: Thêm nhạc nền (tùy chọn)
- ✨ **Easter egg**: Double-click vào ảnh để xem hiệu ứng bất ngờ
- 📱 **Responsive**: Hoạt động tốt trên mọi thiết bị

## 🎮 Tương Tác

- **Click vào hoa**: Mở lời chúc ngẫu nhiên
- **Click nút đặc biệt**: Xem lời nhắn riêng
- **Double-click ảnh**: Hiệu ứng mưa trái tim
- **Phím tắt**:
  - `M`: Bật/tắt nhạc
  - `Space/Enter`: Mở lời nhắn đặc biệt
  - `Escape`: Đóng modal

## 🛠️ Cách Customize

### 1. Thay đổi lời chúc

Mở file `script.js` và tìm dòng:

```javascript
const wishes = [
    "Em có nụ cười rạng rỡ nhất mà anh từng thấy 😊",
    // ... thêm hoặc sửa lời chúc ở đây
];
```

### 2. Thay đổi lời nhắn chính

Mở file `index.html` và tìm phần:

```html
<p class="message-text">
    <!-- Customize lời nhắn của bạn ở đây -->
    Chào em,<br><br>
    ...
</p>
```

### 3. Đổi chữ ký

Trong `index.html`, tìm:

```html
<p class="signature">- Quang -</p>
```

### 4. Thêm nhạc nền

1. Thêm file nhạc (MP3) vào thư mục project
2. Trong `index.html`, tìm dòng:

```html
<audio id="bgMusic" loop>
    <source src="music.mp3" type="audio/mpeg">
</audio>
```

3. Đổi `music.mp3` thành tên file nhạc của bạn

### 5. Thay ảnh

- File ảnh hiện tại: `picture1 Background Removed.png`
- Để thay ảnh khác: đổi tên file hoặc sửa trong `index.html`:

```html
<img src="TEN_ANH_MOI.png" alt="Beautiful Woman" class="main-image">
```

## 🚀 Deploy lên GitHub Pages

### Bước 1: Tạo Repository

1. Đi tới [GitHub](https://github.com) và đăng nhập
2. Click nút `+` ở góc trên bên phải → `New repository`
3. Đặt tên repo (ví dụ: `2010-gift`)
4. Chọn `Public`
5. Click `Create repository`

### Bước 2: Upload Code

**Cách 1: Sử dụng Git (Command Line)**

```bash
cd /Users/quang/Desktop/app2010

# Khởi tạo git (nếu chưa có)
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit - 20/10 website"

# Liên kết với GitHub (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

**Cách 2: Upload trực tiếp trên GitHub**

1. Vào repository vừa tạo
2. Click `uploading an existing file`
3. Kéo thả tất cả files vào
4. Click `Commit changes`

### Bước 3: Bật GitHub Pages

1. Vào repository trên GitHub
2. Click `Settings` (bánh răng)
3. Scroll xuống phần `Pages` ở sidebar bên trái
4. Trong `Source`, chọn `main` branch
5. Click `Save`
6. Đợi 1-2 phút, website sẽ xuất hiện tại:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

### Bước 4: Chia sẻ

Copy link và gửi cho người bạn muốn tặng! 💝

## 📁 Cấu Trúc Files

```
app2010/
├── index.html              # File HTML chính
├── styles.css              # CSS và animations
├── script.js               # JavaScript logic
├── picture1.jpg            # Ảnh gốc
├── picture1 Background Removed.png  # Ảnh đã xóa background
├── README.md               # File hướng dẫn này
└── music.mp3               # (Optional) File nhạc nền
```

## 🎨 Màu Sắc Chính

- Pink Gradient: `#f093fb → #f5576c`
- Purple: `#667eea → #764ba2`
- Gold: `#ffd700`

## 💡 Tips

1. **Test local trước**: Mở file `index.html` bằng trình duyệt để xem trước
2. **Optimize ảnh**: Nén ảnh để website load nhanh hơn
3. **Custom domain**: Có thể thêm domain riêng trong Settings → Pages
4. **HTTPS**: GitHub Pages tự động bật HTTPS
5. **Analytics**: Thêm Google Analytics nếu muốn theo dõi lượt truy cập

## 🐛 Troubleshooting

### Ảnh không hiển thị
- Kiểm tra tên file có đúng không (phân biệt chữ hoa/thường)
- Đảm bảo file ảnh đã được upload lên GitHub

### Nhạc không chạy
- Trình duyệt có thể block autoplay
- User cần click vào nút music để chạy
- Kiểm tra file nhạc đã upload chưa

### Website không load
- Đợi 5-10 phút sau khi enable GitHub Pages
- Clear cache trình duyệt và refresh
- Kiểm tra URL có đúng không

## 📝 License

Free to use. Made with ❤️ for a special person.

## 🙏 Credits

- Design & Code: Quang
- Inspiration: Ngày Phụ Nữ Việt Nam 20/10
- Tools: HTML5, CSS3, Vanilla JavaScript

---

**Chúc bạn thành công! Hy vọng cô ấy sẽ thích món quà này! 💕**
