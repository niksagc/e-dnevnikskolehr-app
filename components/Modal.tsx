export default function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4 w-96">
        {children}
        <button onClick={onClose} className="mt-2 text-xs text-gray-600 underline">Zatvori</button>
      </div>
    </div>
  );
}
