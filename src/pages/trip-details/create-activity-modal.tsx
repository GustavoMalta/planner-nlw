import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalPops {
  toggleActivityModal: () => void;
  onSubmit: () => void;
}

export function CreateActivityModal({
  toggleActivityModal,
  onSubmit,
}: CreateActivityModalPops) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={toggleActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p>Todos os convidados podem ver as atividades.</p>
        </div>

        <div className="flex flex-wrap w-50 gap-2 p-2"></div>

        <div className="w-full h-px bg-zinc-800" />

        <form className="space-y-3" onSubmit={onSubmit}>
          <div className="h-14 bg-zinc-950 border border-zinc-800 rounded-xl px-4 flex items-center shadow-shape gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="text"
              name="title"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              placeholder="Qual a atividade?"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 flex items-center shadow-shape gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="datetime-local"
                name="datetime"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                placeholder="Data e hora da atividade"
              />
            </div>
          </div>
          <Button size="full" type="submit">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
