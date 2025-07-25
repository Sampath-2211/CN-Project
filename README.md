# WebSocket Chat Application

A real-time chat application with file sharing capabilities built using WebSockets. Features separate server and client interfaces with automatic reconnection and modern UI design.

## ✨ Features

- **Real-time messaging** between server and client interfaces
- **File sharing** with download capability (up to 5MB per file)
- **Dual interface design** with dedicated server and client views
- **Auto-reconnection** when connection is lost
- **Connection status indicators** (only shown when disconnected)
- **Modern glassmorphism UI** with background styling
- **Responsive design** with hover effects and animations
- **Keyboard shortcuts** (Enter to send messages)
- **File size validation** and formatting
- **Auto-scrolling** message areas
- **Multiple client support**

## 📁 Project Structure

```
CN Project/
├── server.js          # WebSocket server with file handling
├── client.html        # Client-side chat interface
├── server.html        # Server-side chat interface with file upload
├── package.json       # Project dependencies
├── package-lock.json  # Dependency lock file
├── test.txt           # Sample text file
├── CN5.webp          # Background image (required)
└── README.md          # Project documentation
```

## 🔧 Prerequisites

- **Node.js** (version 10.0.0 or higher)
- **npm** (Node Package Manager)
- A modern web browser with WebSocket support
- **CN5.webp** background image file

## 🚀 Installation

1. **Download/Clone** the project files to your local machine

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add background image**:
   - Place a file named `CN5.webp` in the project root directory
   - This serves as the background image for both interfaces

## 📖 Usage

### Starting the Server

1. **Start the WebSocket server**:
   ```bash
   node server.js
   ```

2. **Verify server is running**:
   ```
   WebSocket server started on port 4000
   New client connected (when clients connect)
   ```

### Opening the Chat Interfaces

1. **Server Interface**:
   - Open `server.html` in your web browser
   - Features: Send messages and files to all connected clients
   - Has file upload capability with size validation

2. **Client Interface**:
   - Open `client.html` in your web browser
   - Can open multiple instances for multiple users
   - Receives messages and files from server and other clients

### Using the Application

#### **Sending Text Messages**
- Type your message in the input field
- Click "Send" or press Enter
- Messages appear instantly in all connected interfaces

#### **Sending Files** (Server Interface Only)
- Click "Choose File" to select a file (max 5MB)
- Click "Send File"
- File will be broadcast to all connected clients
- Clients can download the file using the provided download link

#### **Connection Status**
- **Green "Connected"**: Hidden when connection is active
- **Red status bar**: Only appears when disconnected/reconnecting
- **Auto-reconnection**: Attempts to reconnect every 3 seconds

## 🔧 How It Works

### **Server Architecture (server.js)**
- Creates WebSocket server on port 4000
- Handles multiple simultaneous connections
- Routes messages between clients (excludes sender)
- Supports both text and file message protocols
- Includes connection logging and error handling

### **Message Protocol**
- **Text messages**: Prefixed with `message:` when broadcast
- **File messages**: Prefixed with `file:` containing JSON data
- **File format**: `{name, type, size, data}` as base64 encoded string

### **Client Interface (client.html)**
- Connects to WebSocket server
- Displays messages with color coding
- Handles file downloads via data URLs
- Auto-reconnection on connection loss

### **Server Interface (server.html)**
- Same as client interface plus file upload
- File validation (type, size)
- FileReader API for base64 encoding
- Progress indication and error handling

## 🎨 UI Features

### **Design Elements**
- **Background**: Custom image (CN5.webp) with cover scaling
- **Glassmorphism**: Semi-transparent containers with blur effects
- **Color Coding**: 
  - Blue messages: Server/other users
  - Light gray messages: Your own messages
  - Green messages: File transfers
  - Red messages: Errors/status
- **Responsive Layout**: Works on various screen sizes
- **Animations**: Smooth hover effects and transitions

### **User Experience**
- **Smart UI**: Connection status only shown when needed
- **Auto-scroll**: Messages automatically scroll to bottom
- **Keyboard Support**: Enter key sends messages
- **File Validation**: Size limits and error feedback
- **Download Links**: Direct file downloads from chat

## 🔧 Technical Specifications

### **Dependencies**
- **ws (^8.18.0)**: WebSocket implementation for Node.js
- **No client-side libraries**: Pure vanilla JavaScript

### **Browser Requirements**
- WebSocket API support
- FileReader API (for file uploads)
- ES6+ JavaScript features
- CSS3 with flexbox support

### **File Handling**
- **Maximum file size**: 5MB per file
- **Supported formats**: All file types
- **Encoding**: Base64 data URLs
- **Transfer method**: JSON over WebSocket

## 🐛 Troubleshooting

### **Common Issues & Solutions**

**❌ "Connection failed" or red status bar**
- Ensure server is running: `node server.js`
- Check port 4000 isn't blocked by firewall
- Verify WebSocket URL matches server location

**❌ Background image not showing**
- Confirm `CN5.webp` exists in project root
- Check file permissions and format
- Try refreshing the browser

**❌ File upload not working**
- Verify file size is under 5MB
- Check browser console for JavaScript errors
- Ensure server.js has been updated with latest code

**❌ Download links not appearing**
- Check browser console for file parsing errors
- Verify all interfaces are using the updated HTML code
- Confirm server is broadcasting file messages correctly

### **Debug Mode**
The application includes console logging:
- **Server console**: Shows connection events and message routing
- **Browser console**: Shows WebSocket events and file processing
- **Access**: Open browser Developer Tools (F12) → Console tab

### **Network Deployment**
For use across different machines:
1. Replace `localhost` with server IP address in HTML files
2. Ensure port 4000 is accessible across network
3. Update firewall rules if necessary

## 🚦 Development Notes

- **Security**: No authentication implemented - suitable for trusted networks
- **Scalability**: Handles multiple clients, but no persistence
- **File Storage**: Files are transmitted in memory only
- **Error Recovery**: Auto-reconnection with exponential backoff
- **Performance**: Optimized for small to medium file transfers

## 📝 License

This project is open source and available under standard terms.

## 🤝 Contributing

Contributions welcome! Areas for improvement:
- User authentication
- Message persistence
- Larger file support
- Mobile optimization
- Voice/video chat integration

Feel free to submit issues, fork the repository, and create pull requests.
<img width="1440" height="774" alt="Screenshot 2025-07-25 at 1 33 51 PM" src="https://github.com/user-attachments/assets/8b88f965-75f7-4d85-bb64-5be72414464d" />
<img width="1440" height="772" alt="Screenshot 2025-07-25 at 1 33 43 PM" src="https://github.com/user-attachments/assets/df7d767d-b740-4f86-859d-20cb322c9b44" />
