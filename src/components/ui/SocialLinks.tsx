import React from 'react';
import { SocialLink } from '@/types';
import { cn, openExternalLink } from '@/lib/utils';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Instagram, 
  Mail,
  ExternalLink 
} from 'lucide-react';

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  className = '',
  size = 'md',
  showLabels = false,
}) => {
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const containerSizes = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
  };

  const getIcon = (iconName: string) => {
    const iconProps = { className: iconSizes[size] };
    
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      case 'twitter':
        return <Twitter {...iconProps} />;
      case 'youtube':
        return <Youtube {...iconProps} />;
      case 'instagram':
        return <Instagram {...iconProps} />;
      case 'email':
      case 'mail':
        return <Mail {...iconProps} />;
      default:
        return <ExternalLink {...iconProps} />;
    }
  };

  const handleClick = (url: string) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      openExternalLink(url);
    }
  };

  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {links.map((link) => (
        <button
          key={link.name}
          onClick={() => handleClick(link.url)}
          className={cn(
            'inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            containerSizes[size]
          )}
          style={{ borderColor: link.color }}
          title={link.name}
        >
          <span style={{ color: link.color }}>
            {getIcon(link.icon)}
          </span>
          {showLabels && (
            <span className="text-sm font-medium text-gray-700">
              {link.name}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default SocialLinks; 