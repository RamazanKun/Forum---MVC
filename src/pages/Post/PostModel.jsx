import { v4 } from 'uuid'

class PostModel {
    state = {
        id: v4(),
        date: new Date(),
        title: '',
        text: '',
        user: ''
    }

}

export default PostModel;