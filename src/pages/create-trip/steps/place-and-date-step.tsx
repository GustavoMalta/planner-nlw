import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../components/button";

interface PlaceAndDateStepProps {
  isGuestsOpen: boolean;
  toggleGuestsOpen: () => void;
}

export function PlaceAndDateStep({
  isGuestsOpen,
  toggleGuestsOpen,
}: Readonly<PlaceAndDateStepProps>) {
  return (
    <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center shadow-shape gap-2">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          placeholder="Para onde voce vai?"
          disabled={isGuestsOpen}
        />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"
          placeholder="Quando?"
          disabled={isGuestsOpen}
        />
      </div>
      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsOpen ? (
        <Button btType="secondary" onClick={toggleGuestsOpen}>
          Alterar local /data <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={toggleGuestsOpen}>
          Continuar <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
