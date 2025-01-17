import "../styles/background.css";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-1">
      <div className="absolute inset-0 bg-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-800/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gray-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>
    </div>
  );
}
