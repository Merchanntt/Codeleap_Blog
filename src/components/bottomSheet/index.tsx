import React, {createContext, useCallback, useEffect, useRef, useState} from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Animated, Keyboard, View } from 'react-native'
import { Modalize } from 'react-native-modalize';
import {Feather} from '@expo/vector-icons'
import { useSelector } from 'react-redux';

import { InputComponent } from '../Input';
import ButtonComponent from '../button';

import { createId, createParseDate, timeToRead } from '../../utils/createFunctions';
import { ArticleContainer } from '../postsList/styles';
import api from '../../services/api';
import {IUserData, IUserState} from '../../store/modules/users/userTypes'

import { NewArticleContainer, Header, Title } from './styles';

interface ModalizeContextProps {
  isOpen(): void;
  modalOpen: boolean
  animated: any;
}

interface ModalizeRefProps {
  close(): boolean;
  open(): boolean;
}

export const ModalizeContext = createContext<ModalizeContextProps>({} as ModalizeContextProps)

const BottomSheet: React.FC = ({ children }) => {
  const modalize = useRef<ModalizeRefProps>(null)
  const animated = useRef(new Animated.Value(0)).current

  const user = useSelector<IUserState, IUserData>(state => state.users)
  const [articleTitle, setArticleTitle] = useState('')
  const [articleContent, setArticleContent] = useState('')
  const [isFilled, setIsFilled] = useState(false)

  const [modalOpen, setModalOpen] = useState(false)

  const isOpen = useCallback(() => {
    setModalOpen(true)
    modalize.current?.open()
  }, [])

  useEffect(() => {
    if (articleContent.length > 0 && articleTitle.length > 0) {
      setIsFilled(true)
    }
  }, [articleTitle, articleContent])

  function createArticle() {
    const newArticle = {
        id: createId,
        creatorId: user.id,
        creatorUsername: user.username,
        postTitle: articleTitle,
        postContent: articleContent,
        createdAt: createParseDate,
        readTime: timeToRead(ArticleContainer.length)
    }

    api.post('articles', {
      newArticle
    })
    modalize.current?.close()
  }

  return (
    <ModalizeContext.Provider value={{ isOpen, modalOpen, animated }}>
      {children}
        <Modalize
          ref={modalize}
          panGestureAnimatedValue={animated}
          useNativeDriver
          modalHeight={580}
          onClose={() => setModalOpen(false)}
          modalStyle={{paddingHorizontal: 20, paddingTop: 20, flex: 1 }}
          customRenderer={
            <>
              <Header>
                  <Title>New Article</Title>
                  <BorderlessButton onPress={() => modalize.current?.close()}> 
                    <Feather name='x-circle' color='#232129' size={32}/>
                  </BorderlessButton>
                </Header>
              <NewArticleContainer onPress={() => Keyboard.dismiss()}>

              <View>
                <InputComponent 
                  inputTextLabel={"Article's Title"} 
                  numberOfLines={2}
                  value={articleTitle}
                  onChangeText={(e) => setArticleTitle(e)}
                  />
                <InputComponent 
                  inputTextLabel={"Article's Content"} 
                  multiline
                  isContentInput={true}
                  value={articleContent}
                  onChangeText={(e) => setArticleContent(e)}
                />
                <ButtonComponent 
                  enabled={isFilled} 
                  onPress={createArticle}
                >
                  Create
                </ButtonComponent>
              </ View> 
            </NewArticleContainer>
            </>
          }
        />
    </ModalizeContext.Provider>
  );
}

export default BottomSheet;
