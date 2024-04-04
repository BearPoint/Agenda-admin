export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      alergia: {
        Row: {
          id: string
          nombre: string
        }
        Insert: {
          id?: string
          nombre: string
        }
        Update: {
          id?: string
          nombre?: string
        }
        Relationships: []
      }
      cita: {
        Row: {
          date: string
          id: string
          nombre: string
          notas: string
          pacienteId: string
          tipo: Database["public"]["Enums"]["CitasTipo"]
          user_id: string
        }
        Insert: {
          date: string
          id?: string
          nombre: string
          notas: string
          pacienteId: string
          tipo?: Database["public"]["Enums"]["CitasTipo"]
          user_id: string
        }
        Update: {
          date?: string
          id?: string
          nombre?: string
          notas?: string
          pacienteId?: string
          tipo?: Database["public"]["Enums"]["CitasTipo"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cita_pacienteId_fkey"
            columns: ["pacienteId"]
            isOneToOne: false
            referencedRelation: "paciente"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cita_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
      contactoEmergencia: {
        Row: {
          correo: string
          createdAt: string
          id: string
          nombre: string
          pacienteId: string
          parentesco: string
          telefono: string
          updatedAt: string
        }
        Insert: {
          correo: string
          createdAt?: string
          id?: string
          nombre: string
          pacienteId: string
          parentesco: string
          telefono: string
          updatedAt?: string
        }
        Update: {
          correo?: string
          createdAt?: string
          id?: string
          nombre?: string
          pacienteId?: string
          parentesco?: string
          telefono?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "contactoEmergencia_pacienteId_fkey"
            columns: ["pacienteId"]
            isOneToOne: false
            referencedRelation: "paciente"
            referencedColumns: ["id"]
          }
        ]
      }
      paciente: {
        Row: {
          antecedentes: string | null
          correo: string | null
          createdAt: string
          direccion: string | null
          fecha_nacimient: string
          genero: Database["public"]["Enums"]["Genero"]
          id: string
          imageUrl: string | null
          medicamentos: string | null
          nombre: string
          telefono: string
          updatedAt: string
          user_id: string
        }
        Insert: {
          antecedentes?: string | null
          correo?: string | null
          createdAt?: string
          direccion?: string | null
          fecha_nacimient: string
          genero?: Database["public"]["Enums"]["Genero"]
          id?: string
          imageUrl?: string | null
          medicamentos?: string | null
          nombre: string
          telefono: string
          updatedAt?: string
          user_id: string
        }
        Update: {
          antecedentes?: string | null
          correo?: string | null
          createdAt?: string
          direccion?: string | null
          fecha_nacimient?: string
          genero?: Database["public"]["Enums"]["Genero"]
          id?: string
          imageUrl?: string | null
          medicamentos?: string | null
          nombre?: string
          telefono?: string
          updatedAt?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "paciente_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
      pacienteAlergia: {
        Row: {
          alergiaid: string
          id: string
          pacienteId: string
        }
        Insert: {
          alergiaid: string
          id?: string
          pacienteId: string
        }
        Update: {
          alergiaid?: string
          id?: string
          pacienteId?: string
        }
        Relationships: [
          {
            foreignKeyName: "pacienteAlergia_alergiaid_fkey"
            columns: ["alergiaid"]
            isOneToOne: false
            referencedRelation: "alergia"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pacienteAlergia_pacienteId_fkey"
            columns: ["pacienteId"]
            isOneToOne: false
            referencedRelation: "paciente"
            referencedColumns: ["id"]
          }
        ]
      }
      user: {
        Row: {
          avatar: string | null
          email: string
          fullname: string | null
          id: string
        }
        Insert: {
          avatar?: string | null
          email: string
          fullname?: string | null
          id?: string
        }
        Update: {
          avatar?: string | null
          email?: string
          fullname?: string | null
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      convert_to_uuid: {
        Args: {
          input_value: string
        }
        Returns: string
      }
    }
    Enums: {
      CitasTipo: "PRIMERA_CITA" | "OPERACION" | "PAP" | "RUTINA"
      Genero: "MUJER" | "Hombre" | "MUJER_TRANS" | "HOMBRE_TRANS" | "NO_BINARIA"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
