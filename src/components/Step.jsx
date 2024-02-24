import { useEffect, useState } from "react";

export default function Step({ num, title, path, isActive}) {

  return (
    <div className="text-white flex gap-4 mb-8">
      <div className="grid place-content-center">
        <div className={`grid place-content-center rounded-full border w-5 h-5 p-4 ${isActive ? 'active-step' : ''}`}>
          <span>{num}</span>
        </div>
      </div>
      <div>
        <p className="text-cool-gray uppercase text-xs">Step {num}</p>
        <h2 className="uppercase text-sm font-semibold tracking-widest">{title}</h2>
      </div>
    </div>
  );
}
