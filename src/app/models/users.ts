import db from '../../libs/db';


export const registerUser = async (data: any) => {
    const { id, name, username, phone, password, rol } = data;
    try {
        const newUser = await db.user.create({
            data: {
                id,
                name,
                username,
                phone,
                password,
                rol
            },
        });
        console.log('User registered:', newUser);
        return { success: true, message: 'User registered successfully', user: newUser };
    } catch (error) {
        console.error('Error registering user:', error);
        return { success: false, message: 'Error registering user', error: error };
    }
}

export const update = async (data: any) => {
    const { id, name, username, phone, password, rol } = data;
    try {
        const newUser = await db.user.create({
            data: {
                id,
                name,
                username,
                phone,
                password,
                rol
            },
        });
        console.log('User registered:', newUser);
        return { success: true, message: 'User registered successfully', user: newUser };
    } catch (error) {
        console.error('Error registering user:', error);
        return { success: false, message: 'Error registering user', error: error };
    }
}
export const deletes = async (data: any) => {
    const { id, name, username, phone, password, rol } = data;
    try {
        const newUser = await db.user.create({
            data: {
                id,
                name,
                username,
                phone,
                password,
                rol
            },
        });
        console.log('User registered:', newUser);
        return { success: true, message: 'User registered successfully', user: newUser };
    } catch (error) {
        console.error('Error registering user:', error);
        return { success: false, message: 'Error registering user', error: error };
    }
}

export const auht = async (data: any) => {
    const { id, name, username, phone, password, rol } = data;
    try {
        const newUser = await db.user.create({
            data: {
                id,
                name,
                username,
                phone,
                password,
                rol
            },
        });
        console.log('User registered:', newUser);
        return { success: true, message: 'User registered successfully', user: newUser };
    } catch (error) {
        console.error('Error registering user:', error);
        return { success: false, message: 'Error registering user', error: error };
    }
}