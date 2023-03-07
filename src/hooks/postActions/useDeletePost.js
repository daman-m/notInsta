import { useState } from "react"

const useDeletePost = (id) => {

    const [isLoading, setIsLoading] = useState(false)
    async function deletePost() {}
    return{deletePost, isLoading, setIsLoading}
}

export default useDeletePost;