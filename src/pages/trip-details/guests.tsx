import { CircleCheck, CircleDashed, UserPlus2 } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1 flex-1">
          <span className="block font-medium text-zinc-100">Usuario A</span>
          <a
            href="mailto:email@domain.com"
            target="_blank"
            className="block text-xs text-zinc-400 truncate"
          >
            mail@domain.com
          </a>
        </div>
        <CircleDashed className="size-5 text-zinc-400" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1 flex-1">
          <span className="block font-medium text-zinc-100">
            Lorem ipsum dolor sit amet
          </span>
          <a
            href="mailto:email@domain.com"
            className="block text-sm text-zinc-400 truncate"
          >
            email@domain.com
          </a>
        </div>
        <CircleCheck className="size-5 text-lime-300" />
      </div>

      <Button size="full" btType="secondary">
        <UserPlus2 className="size-5" /> Gerenciar convidados
      </Button>
    </div>
  );
}
