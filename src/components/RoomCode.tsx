import copyImg from "../assets/images/copy.svg";
import toast, { Toaster } from 'react-hot-toast';
import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
    toast.success("Código copiado com sucesso");
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <button className="room-code" onClick={copyRoomCodeToClipboard}>
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala #{props.code}</span>
      </button>
    </>
  );
}
