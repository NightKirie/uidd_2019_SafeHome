import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Button, } from 'react-native-elements';

class ProgressingCaseInformationPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.caseContainer}>
                    <View style={styles.titlecontainer}>
                        <View style={styles.namecontainer}>
                            <Text style={{ fontSize: 40, color: "#BBBBBB" }}>
                                name
                            </Text>
                            <Text style={{ fontSize: 25, color: "#BBBBBB" }}>
                                house                            
                            </Text>
                        </View>
                        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                            <Text style={{ fontSize: 20, color: "black" }}>
                                申請日期
                            </Text>
                            <Text style={{ fontSize: 20, color: "black" }}>
                                date
                            </Text>
                        </View>
                    </View>
                    <View style={styles.addresscontainer}>
                        <View>
                            <Text>
                                address
                            </Text>
                            <Text>
                                phone
                            </Text>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                            <Button title={"打電話"}
                                buttonStyle={{ backgroundColor: "white" }}
                                containerStyle={{ borderWidth: 1, borderColor: "#F37021" }}
                                titleStyle={{ color: "#F37021" }} />
                        </View>
                    </View>
                    <Button
                        title={"1. 基本資料表單"}
                        onPress={() => this.props.navigation.navigate("BasicData")}
                        buttonStyle={{ backgroundColor: "white" }}
                        containerStyle={{ borderWidth: 1, borderColor: "#BBBBBB", alignItems: "flex-start", marginTop: "8%", borderRadius: 0 }}
                        titleStyle={{ color: "#BBBBBB" }} />
                    <Button
                        title={"2. 建築平面圖"}
                        onPress={() => this.props.navigation.navigate("AddFloorPlan")}
                        buttonStyle={{ backgroundColor: "white" }}
                        containerStyle={{ borderWidth: 1, borderColor: "#BBBBBB", alignItems: "flex-start", marginTop: "5%", borderRadius: 0 }}
                        titleStyle={{ color: "#BBBBBB" }} />
                    <Button
                        title={"3. 劣化照片"}
                        onPress={() => this.props.navigation.navigate("RecordPicture")}
                        buttonStyle={{ backgroundColor: "white" }}
                        containerStyle={{ borderWidth: 1, borderColor: "#BBBBBB", alignItems: "flex-start", marginTop: "5%", marginBottom: "5%", borderRadius: 0 }}
                        titleStyle={{ color: "#BBBBBB" }} />
                </View>
                <View style={{ postition: "relative", width: "90%", marginTop: "10%", marginBottom: "5%" }}>
                    <Button
                        title={"提交"}
                        buttonStyle={{ backgroundColor: "#F37021", paddingLeft: "45%", paddingRight: "45%" }}
                        containerStyle={{ alignItems: "center", justifyContent: "center" }}
                        titleStyle={{ color: "white", fontSize: 17, fontWeight: "bold" }} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        backgroundColor: "#F2F1EF",
        marginBottom: "2%",
    },
    caseContainer: {
        position: "relative",
        width: "90%",
        marginTop: "8%",
        backgroundColor: "white",
        paddingHorizontal: "5%"
    },
    titlecontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    addresscontainer: {
        marginTop: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    }
})
export default ProgressingCaseInformationPage;