import { AtSign, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripProps {
  toggleModal: () => void;
  handleCreateTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal(props: Readonly<ConfirmTripProps>) {
  const { toggleModal, handleCreateTrip } = props;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <button type="button" onClick={toggleModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p>
            Para concluir a criação da viagem para{" "}
            <strong className="font-semibold text-zinc-100">
              Florianópolis{" "}
            </strong>
            , Brasil nas datas de{" "}
            <strong className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024{" "}
            </strong>
            preencha seus dados abaixo:
          </p>
        </div>

        <div className="flex flex-wrap w-50 gap-2 p-2"></div>

        <div className="w-full h-px bg-zinc-800" />

        <form className="space-y-3" onSubmit={handleCreateTrip}>
          <div className="h-14 bg-zinc-950 border border-zinc-800 rounded-xl px-4 flex items-center shadow-shape gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              type="text"
              name="name"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              placeholder="Seu nome completo"
            />
          </div>
          <div className="h-14 bg-zinc-950 border border-zinc-800 rounded-xl px-4 flex items-center shadow-shape gap-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              placeholder="Digite seu email pessoal"
            />
          </div>

          <Button size="full" type="submit">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
