import { Button } from "@chakra-ui/react";
const CancelButton = ({ onCancel }) => {
    return (
        <Button
            type="button"
            mt={4}
            colorScheme={"gray"}
            onClick={onCancel}
            variant={"solid"}
        >
            Cancel
        </Button>
    )
}
export default CancelButton;