import { Text, View, StyleSheet, Modal, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../App';
import { toggleModal } from '../../actions';

export default function ToDoModal() {
  const modalStatus = useSelector<RootState, boolean>(state => state.modalStatus)
  const dispatch = useDispatch();
  console.log('what is modalStauts', modalStatus)
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalStatus}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text> Whats up I'm a MODEL</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=> dispatch(toggleModal())}
            >
              <Text> Close this Modal </Text>
            </Pressable>
          </View>
        </View>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  }
})