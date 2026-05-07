const http = require("http");

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Hotel Booking</title>
    <style>
        body{
            font-family: Arial;
            background:#f2f2f2;
            text-align:center;
            padding:40px;
        }

        .container{
            background:white;
            width:400px;
            margin:auto;
            padding:20px;
            border-radius:10px;
            box-shadow:0 0 10px gray;
        }

        input, select{
            width:90%;
            padding:10px;
            margin:10px;
        }

        button{
            background:#0077cc;
            color:white;
            border:none;
            padding:10px 20px;
            cursor:pointer;
        }

        button:hover{
            background:#005fa3;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Hotel Booking</h1>

    <form>
        <input type="text" placeholder="Guest Name"><br>
        <input type="date"><br>

        <select>
            <option>Select Room</option>
            <option>Single Room</option>
            <option>Double Room</option>
            <option>Luxury Suite</option>
        </select><br>

        <button>Book Now</button>
    </form>
</div>

</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});
