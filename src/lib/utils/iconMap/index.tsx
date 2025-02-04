import React, {ReactElement} from "react";
import { Icons } from "@/components/Icons";
import { HomeIcon, NotebookIcon } from "lucide-react";


export const iconMap: Record<string, (props: React.HTMLAttributes<SVGElement>) => ReactElement> = {
    home: (props) => <HomeIcon {...props} />,
    notebook: (props) => <NotebookIcon {...props} />,
    github: (props) => <Icons.github {...props} />,
    linkedin: (props) => <Icons.linkedin {...props} />,
    x: (props) => <Icons.x {...props} />,
    youtube: (props) => <Icons.youtube {...props} />,
    email: (props) => <Icons.email {...props} />,
};