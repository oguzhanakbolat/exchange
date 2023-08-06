export const emailControl = (email) => {
    const emailControl = email.trim().split('@');

    const emailControl1 = emailControl[1]?.split('.');

    if (emailControl.length < 2 ||
        emailControl1.length < 2 ||
        emailControl1[0].length < 2 ||
        emailControl1[1].length < 2) {
        return false
    }

    return true;
}