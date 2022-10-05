
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from "react-router-dom";
import WhiteBox, {WhitePostsItemBox} from '../common/WhiteBox';
import { POST_IMAGE_PATH } from '../../lib/text/host';


const PostImageListBlock = styled(WhiteBox)`
  display: flex;
  height:2rem;
`;
const PostImageWrapper = styled(Responsive)`
`;
const PostImageItem = styled.img`

`
const PostImageItems = ({post_id, pfs})=>{

    return pfs.map((pf)=>  <PostImageItem src={POST_IMAGE_PATH +post_id+"_"+ pf.pf_id+".png"}/>);

}

    const PostImageList = ({post_id,pfs, error}) => {


    if (error) {
      return <PostImageListBlock>게시판 이미지 불러올 수 없습니다...</PostImageListBlock>
    }
    /**에러처리 */
    return (
      <PostImageListBlock>
        <PostImageWrapper>    
           {post_id&&pfs&& <PostImageItems post_id={post_id} pfs={pfs}/>}
        </PostImageWrapper>
      </PostImageListBlock>
    );
  };
  
  export default PostImageList;