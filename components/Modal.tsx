export default function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        {children}
        <button onClick={onClose} className="mt-4 text-sm text-gray-500">Zatvori</button>
      </div>
    </div>
  );
}
