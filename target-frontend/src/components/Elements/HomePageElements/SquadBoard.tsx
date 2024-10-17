import {FC} from 'react';

interface SquadBoardProps {
    IsOrganizer?: boolean;
    Description?: string;
    Name: string;
    ImageURL: string;
}

const SquadBoard: FC<SquadBoardProps> = (props) => {
    return (
        <>
            <div>
                <div className={`flex ${props.IsOrganizer && 'space-x-5 flex-row'} ${!props.IsOrganizer && 'flex-col'}`}>
                    <div
                        style={{backgroundImage: `url('assets/avatars/${props.ImageURL}')`}}
                        className='bg-cover bg-no-repeat bg-center w-48 h-48 lg:w-56 lg:h-56 rounded-xl'>
                    </div>
                    <div className="flex-col">
                        <h3 className="scroll-m-20 text-l tracking-tight opacity-85 lg:text-2xl">
                            {props.Name}
                        </h3>
                        <p className={`leading-7 [&:not(:first-child)]:mt-2 ${!props.IsOrganizer && 'hidden'}`}>
                            {props.Description}
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SquadBoard;