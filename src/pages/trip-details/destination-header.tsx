import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestinationHeader() {
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className=" text-zinc-100">Braga, Portugal</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className=" text-zinc-100">07 a 15 de Setembro</span>
        </div>
        <div className="w-px h-6 bg-zinc-800" />
        <Button btType="secondary">
          Alterar local/data <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
