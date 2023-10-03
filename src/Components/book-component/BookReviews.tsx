interface IProps {
    comment: string;
}

export default function BookReviews({ comment }: IProps) {
    return (
        <div className="flex justify-center items-center">
            <p
                className="bg-gray-300 flex flex-col my-2 w-3/6 rounded p-2"
            >
                {comment}
            </p>
        </div>
    );
}

