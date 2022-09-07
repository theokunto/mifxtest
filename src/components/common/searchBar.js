import { Input, InputGroup, InputLeftElement, InputRightElement, Kbd } from "@chakra-ui/react"
import { memo } from "react"
import { MdSearch } from "react-icons/md"

const SearchBar = ({onSearch}) => (
    <InputGroup>
        <InputLeftElement
            pointerEvents='none'
            children={<MdSearch color='gray.300' />}
        />
        <InputRightElement
            pointerEvents={'none'}
            mr={4}
        >
            <Kbd>Enter</Kbd>
        </InputRightElement>
        <Input
            bgColor={"#fff"}
            placeholder={"Search product here"}
            onKeyDown={(e)=>{
                if(e.key === "Enter"){
                    onSearch(e.target.value)
                }
            }}
        />
    </InputGroup>
)
export default memo(SearchBar)