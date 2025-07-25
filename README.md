# 🚀 WebSocket Chat Application

A real-time chat app with file sharing, modern UI, and auto-reconnection — built using WebSockets.

---

## ✨ Features

- Real-time messaging (text + files)
- File sharing (up to 5MB)
- Auto-reconnection with status indicator
- Dual UI: `server.html` (send files) & `client.html`
- Glassmorphism design & responsive layout
- Keyboard shortcuts & hover animations
- Auto-scroll, file validation, multi-client support

---

## 📁 Project Structure

```
CN Project/
├── server.js          # WebSocket backend
├── client.html        # Client chat interface
├── server.html        # Server interface with file upload
├── package.json
├── CN5.webp           # Background image
└── README.md
```

---

## 🛠 Requirements

- Node.js (v10+)
- npm
- Modern browser with WebSocket & FileReader API support

---

## 🚀 Setup & Usage

### 1. Install dependencies

```bash
npm install
```

### 2. Start the WebSocket server

```bash
node server.js
```

You should see:

```
WebSocket server started on port 4000
```

### 3. Add background image

- Place `CN5.webp` in the project root directory.

### 4. Open the chat interfaces

- **Server Interface**: `server.html`
  - Can send messages and upload files (max 5MB)
- **Client Interface**: `client.html`
  - Can send and receive messages and download files

---

## 💡 How It Works

### server.js

- WebSocket server on port **4000**
- Routes messages and files to all connected clients (excluding sender)

### Message Protocol

- Text messages: `message:<text>`
- File messages: `file:<JSON>`  
  Format:  
  ```json
  {
    "name": "filename.ext",
    "type": "mime/type",
    "size": 123456,
    "data": "base64_encoded_content"
  }
  ```

### Interfaces

- `client.html`: Basic chat client
- `server.html`: Same features + file upload via FileReader API

---

## 🎨 UI Design

- **Background**: Uses `CN5.webp` with cover scaling
- **Glassmorphism**: Blurred, semi-transparent chat container
- **Color Coding**:
  - Blue: Messages from others
  - Gray: Your messages
  - Green: Files
- **Responsive Layout**: Mobile-friendly
- **Animations**: Hover effects and transitions
- **Smart Reconnection**: Only shows red bar when disconnected
- **Keyboard Support**: Press `Enter` to send

---

## ⚙️ Technical Details

- **Backend**: Node.js + `ws` (v8.18.0)
- **Frontend**: Pure Vanilla JavaScript (no frameworks)
- **File Limit**: Max 5MB, any format
- **Encoding**: Files are base64-encoded and sent as JSON over WebSocket
- **In-memory Transfer**: No file persistence (everything happens in memory)

---

Here is the Server.js
<img width="1440" height="774" alt="Screenshot 2025-07-25 at 1 33 51 PM" src="https://github.com/user-attachments/assets/8b88f965-75f7-4d85-bb64-5be72414464d" />
Here is the Client.js
<img width="1440" height="772" alt="Screenshot 2025-07-25 at 1 33 43 PM" src="https://github.com/user-attachments/assets/df7d767d-b740-4f86-859d-20cb322c9b44" />
