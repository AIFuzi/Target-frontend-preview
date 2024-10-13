import {FC} from 'react';

interface ImageInfoProps {
    ImageURL: string;
    children?: React.ReactNode;
}

const ImageInfo: FC<ImageInfoProps> = ({children, ImageURL}) => {
    return (
        <div style={{backgroundImage: `Url(assets/${ImageURL})`}}
             className='bg-cover bg-no-repeat w-full h-screen bg-center'>
            <div className="w-full h-screen flex flex-col items-center justify-center ">
                <div className="bg-black w-full h-screen absolute opacity-60"></div>
                <div className="flex flex-col items-start w-4/5 space-y-3 lg:w-2/5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ImageInfo;