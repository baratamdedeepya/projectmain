import React from 'react';

export const MetricBadge = ({
  icon: Icon,
  iconBg = 'bg-emerald-500',
  label,
  value,
  trend,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-between py-1.5 px-1 text-xs ${className}`}>
      <div className="flex items-center gap-2">
        <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${iconBg}`}>
          {Icon ? <Icon className="w-2.5 h-2.5 text-white" /> : <span className="w-1.5 h-1.5 rounded-full bg-white" />}
        </div>
        <span className="text-slate-500 text-[11px] font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="font-semibold text-slate-800 text-[12px]">{value}</span>
        {trend && <span className="text-[10px] text-emerald-600">{trend}</span>}
      </div>
    </div>
  );
};
