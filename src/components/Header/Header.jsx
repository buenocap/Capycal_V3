import "./Header.css";

export default function Header() {
  return (
    <div className="header bg-AshGray/50 rounded-b-md flex justify-between items-center px-4 py-2">
      <div className="Logo flex items-center gap-1">
        <img src="./CapycalLogo.png" alt="Capycal Logo" width={50} />
        <p className="text-2xl font-extrabold">Capycal</p>
      </div>
      <div className="Navigation"></div>
      <div className="Login"></div>
    </div>
  );
}
