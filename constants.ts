import { Machine, NavItem } from './types';

export const COMPANY_NAME = "Shine Jewel Tech";
export const COMPANY_PHONE = "+91 98765 43210";
export const COMPANY_EMAIL = "info@shinejeweltech.com";
export const COMPANY_ADDRESS = "123, Gold Market, Zaveri Bazaar, Mumbai, India";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Machines', path: '/products' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

// INSTRUCTIONS FOR IMAGES:
// 1. Create a folder named 'images' in your public directory.
// 2. Add your machine images and name them exactly as shown in the 'image' fields below (e.g., laser-cutting.jpg).
// 3. Add your logo as 'logo.png'.

export const MACHINES: Machine[] = [
  {
    id: '1',
    name: 'Precision Laser Cutting Machine',
    category: 'Cutting',
    description: 'High-speed fiber laser cutting for intricate gold and silver sheet designs with minimal loss.',
    image: '/images/laser-cutting.jpg',
    features: ['0.01mm Precision', 'Fiber Laser Source', 'Automated Feeder', 'Dust Collection System']
  },
  {
    id: '2',
    name: 'Automatic Chain Making Machine',
    category: 'Assembly',
    description: 'Fully automated system for creating various styles of gold chains (Box, Rope, Curb) at high speed.',
    image: '/images/chain-making.jpg',
    features: ['300 Links/Minute', 'Touch Screen Control', 'Versatile Wire Gauge', 'Self-Lubricating']
  },
  {
    id: '3',
    name: 'Vibration Polishing Tumbler',
    category: 'Finishing',
    description: 'Heavy-duty vibratory finishing machine for polishing large batches of jewelry to a mirror finish.',
    image: '/images/polishing-tumbler.jpg',
    features: ['Quiet Operation', 'Variable Speed', 'Durable Polyurethane Lining', 'Auto Discharge']
  },
  {
    id: '4',
    name: 'CNC Engraving Router',
    category: 'Design',
    description: '3-axis CNC router specifically calibrated for engraving rings, bangles, and pendants.',
    image: '/images/cnc-router.jpg',
    features: ['3-Axis Control', 'High RPM Spindle', 'Diamond Bit Compatible', 'Design Software Included']
  },
  {
    id: '5',
    name: 'Induction Casting Machine',
    category: 'Casting',
    description: 'Advanced vacuum induction casting for porosity-free gold and silver jewelry casting.',
    image: '/images/induction-casting.jpg',
    features: ['Inert Gas Atmosphere', 'Rapid Melting', 'Digital Temp Control', 'Water Cooling']
  },
  {
    id: '6',
    name: 'Bangle Turning Machine',
    category: 'Cutting',
    description: 'Diamond cutting lathe for creating faceted designs on gold and silver bangles.',
    image: '/images/bangle-turning.jpg',
    features: ['Diamond Tool Holder', 'Adjustable Patterns', 'High Stability Base', 'Safety Guard']
  }
];