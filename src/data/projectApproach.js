import { FaDraftingCompass, FaTruckLoading, FaHardHat, FaPuzzlePiece, FaClipboardCheck, FaFlagCheckered } from 'react-icons/fa';

export const phases = [
  {
    id: 1,
    Icon: FaDraftingCompass,
    title: 'Design Phase',
    items: [
      'Presales engagement',
      'System design & layout',
      'Technical documentation',
      'TDS approvals',
      'BOQ finalization',
    ],
  },
  {
    id: 2,
    Icon: FaTruckLoading,
    title: 'Procurement Phase',
    items: [
      'Equipment ordering',
      'Vendor coordination & manufacturing',
      'Material dispatch & site delivery',
    ],
  },
  {
    id: 3,
    Icon: FaHardHat,
    title: 'Construction Phase',
    items: [
      'On-site installation activities',
      'Daily, weekly & monthly progress reports',
      'Installation & pre-commissioning',
    ],
  },
  {
    id: 4,
    Icon: FaPuzzlePiece,
    title: 'Integration Phase',
    items: [
      'Third-party system integration',
      'Interface coordination with other services',
    ],
  },
  {
    id: 5,
    Icon: FaClipboardCheck,
    title: 'Testing Phase',
    items: [
      'Standalone component testing',
      'Pre-commissioning readiness review',
    ],
  },
  {
    id: 6,
    Icon: FaFlagCheckered,
    title: 'Closure Phase',
    items: [
      'Snag rectification',
      'Inventory check and spare handover',
      'Project documentation & DLP initiation',
    ],
  },
];
