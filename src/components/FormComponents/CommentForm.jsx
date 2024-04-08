import React from 'react'
import { Star } from "lucide-react"
const CommentForm = () => {
    return (
        <form>
            <p className='text-skin-text font-lato font-medium text-base mt-3'>
                Your rating *
            </p>
            <div>
                <div className='flex items-center justify-start gap-0 mt-1'>
                    <Star size={20} />
                    <Star size={20} />
                    <Star size={20} />
                    <Star size={20} />
                    <Star size={20} />
                </div>
                <p className='text-skin-text font-lato font-medium text-base mt-5'>
                    Your review *
                </p>
                <textarea className='border-border_2 border border-solid p-3 mt-1 focus:outline-skin-brand w-full rounded-md font-lato font-normal' name="comment" cols="30" rows="10">
                </textarea>
                <button type='submit' className='px-6 py-2.5 bg-skin-brand hover:bg-skin-brandDark text-white rounded-lg font-quicksand font-semibold '>
                    Add Comment
                </button>
            </div>
        </form>
    )
}

export default CommentForm