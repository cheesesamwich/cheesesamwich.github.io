import { useRef, useState, useEffect } from "react";
import "./style.css";

const flags =
{
    "Lesbian": ["#d42c00", "#fe9955", "#ffffff", "#d261a3", "#a40061"],
    "Gay": ["#078d70", "#26ceaa", "#98e8c1", "#ffffff", "#7bade2", "#5049cc", "#3d1a78"],
    "Finsexual": ["#a183cd", "#c5a3d0", "#e1bbd7", "#de92be", "#d773a6"],
    "Finromantic": ["#c290bd", "#d6acc2", "#e5c2cc", "#e49fa9", "#df8188"]
};

export function Woke()
{
    const canvasRef = useRef(null);

    const [imageSrc, setImageSrc] = useState(null);

    const [flag, setFlag] = useState(0);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const drawImage = () => {
        if (imageSrc && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.onload = () => {
                const size = Math.min(img.width, img.height);
                const offsetX = (img.width - size) / 2;
                const offsetY = (img.height - size) / 2;
                const borderThickness = 45;
                const radius = (canvas.width / 2) - borderThickness;

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                ctx.save();
                ctx.beginPath();
                ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.clip();
                ctx.drawImage(img, offsetX, offsetY, size, size, borderThickness, borderThickness, canvas.width - borderThickness * 2, canvas.height - borderThickness * 2);
                ctx.restore();

                const colors = Object.values(flags)[flag] ?? [];
                const stripeWidth = borderThickness / colors.length;

                colors.forEach((color, i) => {
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.arc(canvas.width / 2, canvas.height / 2, radius + i * stripeWidth, 0, Math.PI * 2);
                    ctx.arc(canvas.width / 2, canvas.height / 2, radius + (i + 1) * stripeWidth, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.fill();
                });
            };
            img.src = imageSrc;
        }
    };

    useEffect(() => {
        drawImage();
    }, [imageSrc, flag]);

    return (
        <div className="Woke">
            <div onClick={() => {setFlag(Object.keys(flags)[flag + 1] ? flag + 1 :  0)}}>
                <h1 style={{textAlign: "center", userSelect: "none"}}>Wokeify your pfp<br/>{Object.keys(flags)[flag]}</h1>
            </div>
            <input 
                type="file" 
                accept="image/*" 
                id="file-upload" 
                style={{display: "none"}}
                onChange={handleFileChange} 
            />
            <label htmlFor="file-upload" className="upload-label">Upload File</label>
            <canvas ref={canvasRef} width="500" height="500"></canvas>
            <h3>Not many flags right now, feel free to pull request your own if you want to :)</h3>
        </div>
    );
}
