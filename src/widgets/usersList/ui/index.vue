<template>
    <table-container>
        <template #head>
            <tr>
               <th v-for="item in Users.userNameList" class="user-cell user-cell-head text-caption font-weight-bold">
                    {{ item }}
               </th>
            </tr>
        </template>
        <template #body>
            <tr v-for="item in Users.userList">
                <td>
                    {{ item.fullname }}
                </td>
                <td>
                    {{ item.login }}
                </td>
                <td>
                    {{ item.email }}
                </td>
                <td>
                    {{ item.role }}
                </td>
                <td>
                    <button-menu density="comfortable" icon="mdi-dots-vertical" location="right top">
                        <template #list>
                            <v-list>
                                <v-list-item class="d-flex justify-center">
                                    <template v-slot:append>
                                        <delete-user @confirm="deleteUsers(item._id)"/>
                                    </template>
                                </v-list-item>
                            </v-list>
                        </template>
                    </button-menu>
                </td>
            </tr>
        </template>
    </table-container>
</template>

<script setup lang="ts">
import { TableContainer } from '@/entities/table';
import { ButtonMenu } from '@/entities/buttonMenu';
import { useUserList } from '../lib/store/store';
import { DeleteUser } from '@/features/users/deleteUser';
import { deleteUsers } from '../lib/utils/useUsers';


const Users = useUserList()

</script>

<style lang="sass">
    .user-cell
        width: 25%
        &-head
            color: #757575
</style>