export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-base flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
      <p className="mt-4 text-text-muted text-sm">Cargando...</p>
    </div>
  );
}
