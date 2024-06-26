const songs=[
    {
        id:1,
        name:"Shape Of You",
        artist:"Ed Sheeran",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfeusJUB6RFbQ8G5gxrSGv0HpJROheOw2PQ&usqp=CAU",
        genre:"Rock",
        audio:"Shape-of You.mp3"
        
    },

    {
        id:2,
        name:"All of Me",
        artist:"John Legend",
        img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYZGRgZHB4aGhwcHBwaIR4hHhocHBwcHhwcIS4lHB4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMBgcGEAYREDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABFEAACAQIEBAMGBAMEBgsAAAABAgADEQQSITEFBkFRImFxBxMygZGxocHR8BRS4UJicoIVJDNDsvEWIyU0U3OSorPS4v/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDGYQhAIQhAIQhAIQgIGyexWsTTqU77NmA9Y89pePCU2OfbTL5noB+cZexO16x30XXtvp++0rntfxN8XkDXAFz67QKCxubnrOYQgE7VB1NpxCA4VgNvtOidf6xtnM9U67wJLDAg/EB6AGT3DQ7eFH+3ptaQ/DKiDxFb+vWWDB41nBWmBfvsB/8AYwHrcJqf2ymo3On2kHic1J9dUJsdb/iJYsJwGvUOYu7eptf0HSd47llihVr36H9YEIaNJkuAg9f1OsjsRhwVZQQQRfQ7W2I7xucE6OyMubtqR+H5Rx7qwDAsD1U7fSBXCJ5F8ZTysex1HziEAhCEAhCdLvrA5hCEAhCEBSnTLEKBck2A7mXul7Oqq4Y4l2syqKgTLfbXKepMqXDwpK2DFgw0Pw3JAXUar6+k3zk/C4paTDFOHF7JsTksPiNhc38oGd4niTYyl/D0MMxugzH4AWvpbud9JfMTytSxOHQVKYFRUyKXGq6b2B1jLlfmOlUxdbDtkBRiKRGl16jbcWMvQEDHMB7NcQnvkqMhpkXVluSSuosp+E6+czvijE1XzKqtexUbAgAW/CfU4HlMT53VBjq/gG69B/IsDOIQhAIQhAIQhAJ0ouZzO6O8DSfZriWpO7J1Tb08uplJ5kr1KmIepVDAuxIzaaX0kzy1xL+HbNa4KEaf0kdzDxBquUtay3yjtfU69YEDCEIBCFoXgAE7UCcWkrwfhLVmvst9T+kBPBYV6rBVBI8hNP5c5cZAMwsJ1y9wynSAsNe8udBltAXwWFVRtPMThAY4RvSKOdLQM25r5aDqWW4YbGZpXq1KbFXubaa7/WfQWJpg3H7MzPnrl8sPeoNetoFDqEOpI3HSMjHFB8rajyInOIp2YjpuPSAjCEIBCdKB1NpzAIvhMK1R1poLsxsB3M8wuXOmb4cwzel9fwmocW4tgsPiDWo0wXOSmXUDInhGa3QsVJ1HaBmFfDMnxC2pX5qbEfIz2hQOZCR4WYC/TcS38e5jw2JRwKIouPhb4s4AIy6fD0kly1wZTi8P7yjT8dNGCDUABTcldbsfDqYFi5B5epvSdvdlFGIzjNrnVNFHmAwuOk0mFGkqjKoAA2A0E6sIEM/LWFLip7lQ4OYMBY366jvJgDpA22npMAAE+dvaJif+0cRb+Zf/AI1n0ODPmjnGvmx2JN/94w+ht+UCChCEAhCEAhCEAi+GGsQjrCqSYExgad7RnxakQQCdB2j+lTawtpppOeIiyhfneBAEG22k5CGPqhTYkfKIPVHTWAiU854BfSeE3gsB1QoZ2Cr85onA8MqIFA2lX4Hhctj1MunDqeggSWHQ/KT+GvbaRNCnbeTOCrgaEwHlOdhj8+v6QRxBnF4CNdD0+cjcXSupBHykylZYxx2UjQj0gYhzXhFWswWROjU/7yf8Ml+cqn+tOP5Tb6gGRmHYKytup0b0OhECPnaKDe5tpppe57RTFUcjsvYkfp+EQgAEIXhA7p0yxsoJJ2AFz9BNC4bywuOFKjTz0VRSys/izC/jYqLWYuSBrsJTOA8VbDV0rqASh1B6g6MPmCZNLzrVXEvXRQiuTekpIWxB697m9xvAR534Th8LiBRoMzFEUVCdQHtc29Rrbpeat7OOGmxqvRNJ0sq3cuWQopF7+swy5djmbUm+pJ3N5duVecq+GIBcumgIbew7Xgb4VjPEY2mhszqCNwTK5xvmtGoI9B1BfXWw2Go163mY8bxtRGLs4Z310a9vpA3ehURxdWBHcazsp5zHOSucmo3FT/Zm5Pcek0fD80Yd6XvQ/wDlv4r+kCadNNDrPlTid/fVL6+Nte/iOs+o8LjUqUy6nSxnyxitXc92P3MBCEIQCEIQCEIQASRwmhjBN5LYZx2v6wJTDpex6Cw+ciOME5yBtLBhmGQZQJBcVqkuegECJyHsZ5YxRqhiZYwPLR7gKGZh5Roo6yycEwpsDbeBIYKyDXQSawnF1QeFb+u0hsdhWUXtew7SuYniTi4GkC/YzmlwPCgMY0OdKgbxUxbyJlNwyVHVmyswG5vYCd4Gm7OEAuT0ve/pA1vhPHhVAO3lHmO4lkXNrYSkcmU299kYEW73lt55wzpSQIpN7kkA6WECp8U5orkkKQi9zvPOFcYRiM9VmbprtIuhhq/uncUk01LvqSOwFpEYbhmIr1FKUrEndRlXQ6nUwH3MtH/WqovfNlNz/hG0ggPCynddf3+EsPNeDeliSHOZ8iEgf4bafSRaIGUm1jb7bj5QI/GG5B/uj7W/KJFCADbQ7fLeeVGuY7TD1HFlQkILkgbA9TaAyhOipnMDtCNbi+mnke84AhHoqWUKFF7b9TfWA5wnD1ZlIcBRa5Ohv1kpjOFCwam2YX3v1EgUJHxHSPsNjGXRT4TraBJ4ILYo4Oh0F+88xfCzmyopKnXN2iK4wKQ3Xrf9ZYMHxEAADrv+kCKTh7eFcuQdGOv4ecUwNRlqZGax1sft6SQq4p85BW633iGNpXBKIbkC5Cm8CUxfFMQmEqKtUqAp+H07zLZcOJNUXDuCrWO5IP7Ep8DvIbXsbXtfpftfvBkItcEX1HmO47ySb/ua/wDnN1H8g6bxzzNSyjDrcG1BNrdbnWBAwhCAQhCB2jAdJIYF7nWRyKSbCW7kvh6vU8YuFF7HaA5UjJtaw32lX4jWBY6S8828UBT3aIqoLXIFix6D0Eo1DD52vAj2E9RLxfGizW7RbB0sy/OAnQp6iXDgYGkrFFPFJ3hFaxgXqlg1dbEbiVjjXLnjuqyw8LxoFiZZKGRxraBQOFYB0UoFFm6Fd/LST/DeDIpz5FDDY22Pf1ltp8OTyiGPsi6aCBW8HhglcP1JuZfsfhfeICO3rKLhnzvfoNpf+E1A9MAHaBRcTwupcoNj0Gn/ADk5wTgq01BK6/W3pJ+rRUm9gDEauJywMj9q+Eti6TrpmSx/ysf1lTrEKmYaWP8Azl39otTPiKQXUqhJ+bf0lM45hVW4VrZhmCnTTqPXeBAYelmdVvbMwF+1za827g3AqGHzBXTxotM3IOw1b11mP8vBP4ikahsgdcxPQXGvpNWx3OvDqYOUGoV0ORLfi1gdoELz1w3C0sGShRqpcWcHxG51H0vMvlz5y5wTGU1p06Puwr5ySRc6EWsNt5T0UkgDcmw+cDTuWuVcE9CnUqhmdlDN8drnW1hpJ5+AcOtf3INuuVpLNxKlhqNNXRvhC2QF7WUb21tJLDPSqpmS9j3UqfoYFYwlHApfJQ8v9mT+JE6VcG7aYcXH9wD7yZfg6s7HVRpYA6esMLwhEct531gMVw+HA0wx+SLFaTpbTDn6LEeMc44TC3RnLvr4UFz8zsPrKdjfabVJPu6Cqt9CxzH6DSBePf219wbeeURBONU2cIiqz9RmAI8rdZlXEecsXXOVqmVP5UFh+GsQ4eHDiomYMDfN2MDROd3qfwlUmmFFgCb3tcjymNy/cx8YxVTCFXe6EqHuADv9rygwF61NlAU7HX57ROpfr2EkeNL8B7iMK5ux+X2gJQhCAT1VvPJKcOwRa+m8BHC0tgAbk7+Us3DqrUVuCR3A+08oYEIt2sMvS9o0xFfN/hG2sBPiWNaq2voB+frFsHhctu9tfvOcFh7tmIsBrHxT+1bUn8oFSx/xmO+BVBnytsw/HpG3EB4o12MCcqDK5G0Xw5IN5ACu1wSSbSwYMh0BgWDCVzpLHw3FHa8qOG0sJYuHdIFywde43kRzXiytIkHTr6R1gmsIpxCgroVIvcQM5xvMrIQqK23QaSzcv81VMoJVj3sD9u884dytTZ7WsDp5fjLry7wRKOZco8LXXSB7SxrsAzgqSLkHf5xPFVdJJcRoga7SBxVQKjOdlBJ+QvAzHm3iBetUCm2Sy+en5XlTqVGbVyWAFt5LJQLu5JOZmLbdyTEsXg1y75WNrjp569IEdgMXTptd6XvBcEXYrsfIay3NzlhHGV8IANNsp29AJRq1LLEoGlYHjnCyQBhkQnTxJfX1lqoYvDIPBSRetwgH5TFeGpetTG93Uf8AuE1mrgsrgZWKjbp5wJupzEgFxa1ugjZuaVudbWF9B3kHiahFgEAdQbjpby85GqQl3YXzAaD1gWv/AKULtmJ9QenpPE5jW5uDba1id5XsFSFRh0sNf6dp1RYWyAC4fff6wJvEcRokEsim390Ej1kJXxlAkH3Q/wDQJ6lIWZT8TE3b8onSwapfObmxP7EAo1KAuVoqOhIUC9+hjwYlEy5UCgkE2UW22iC4NT49MoUG3frt3ialnOUplQA2N9frAjuL4ihiXs6MNd0NvmRsYx/0HhOjVvqv6RytMIL5TvudLdN47p4vQWQfgYFW5kplWQG9sukhCZO8048VnRlBsF6i0hkoEi4gdYSjnYL1MksfgMtMNkytewtfXvec8KoFHWoRoplkxbe/QZQNXJItqIFUw2AJF226Sw4J8g2FrW9IomECfFpbcxlXrBjZRpAUxeKzm3TtEFF9SPT99J25Crmt4Rue/lfrGuGrFszbDYfswJJ3ypYdbD6ztqtkXz/SR2Ifwg+f2tPKmIuqjTS0CKx/xm/eNX3i+LPijdjA8kvwbE28JkRFKL5SDAvWH1k1gGtKrwvHAiWDA19RAsnviAIw4hzHkORUdm2HhNo6XEAqJEY7E1AboD6fvaAzfHY1nuKNQrvoAPzlg4Ljse2oo1Bl2zEX+l5H4TmaqgAKEkeV5McN5hruwAQ/S2kCyVsTVdB7xChtYnQ/baQXMLOuGcILk2v/AIdzpLXTVmTxbzM+P8xZceaA+FAFIvoWbxMD6Aj6GBCYZFdjl3B1/WdcU4aWuVtqPxG35ydfhQDCpT8IbcHUf/n12j98IpHiuL2gY/jlsQDGktPPPDFo1lVSSGXNqLb9JWQkB7wNb4il/jX/AIhNsxILAhhsRbptt+/OY5wFbV6B1+NdvWbxVwwvcaXsb/nArmNQq6JYXa5LW/CR+PwR2A3It5d5Z8WlrZhrfT9Y0xKtkOX4ukCIw2HKXFs3XQdT67znAYJwWLG+vz9ZJhGy3zagD694zpVHa99NbH9dIHtQDPtp1v8AeD0EZc+U3AOkdpTHXvBsOCLG9vKBA18MfD4rKBt5frOeI4SscppOALC4tr6yf/hLADz9dvtO8KSQ56jYEdBAgzw3OgVwWJ69L97dIU+BsoAFtPKWHh5Z0uwsSTt+Ude68vwgY0tLNa4j3DcLvrpbvJrB8OXKMxW/rcSR/hqY1Lr+HpAisPh6aaMy2O+v71hh3popCkWuTfy6TjGU6XkTf6SHx9QBsiepgdYrFFybHSCUwBbYn8B3/pFcBSAAYgEnbyH8xjXimJVTlU5j1I7wI/iGJubC+Vdh9z6zig/gHbWMKh1i1GrZCPOBK1X/AOrvp1kclbTfynXvfBb1EY3gd12uYnAmEAhCEBzhcSUMsvD+JqbXMqM7SoRsYGqYDiCmwuJYMEEa1wDMXo8SdesnMDzY6WvA2elgaW+UfOS2FROiiZPR58QLre89p+0lUFrMSO0DTeYuMJhqL1GNgoNh1JtovzOk+bMRiWd2qMfGzF2PmTf7yU5j5orYtvGbIPhUfc9zIdIGucm8UWtRCtqy6MOo/vAdZPVcPbwsPMMOo7/rMc4Q+JRxVoK7ZPiyqWFuoa007gHNtGqAjsFfYo+mv90wKpz5g2OUkkkfCfKUdUYaWvNi4/gA6lf7B0B3Kn9JmdfAsjlWGxIv3tA75eZff07mxzr95vFfb+zfQbzC6WGV3RSvUep1E2HDcCpgLcEkLrmYn666wO8XUU2JIsDbcRpiKyXtnS/qOsVxPBcOAVNNTeRtbhGGQZjSTQW2/d4CqVKYuM6XXT4hEHxCHxB1A67a/KVH/TmESo6tQuAfiAG/odpPcP41w5yNEU/31tby7QHicVpBgC+hG/TsNRHT8UpKDmdZL4N6Di6e7I8sp+20eZFIsEU/5f6QKp/palY5HzX8vxitHGKQSpv8jLA2DQg3QEeg/SJvwxCLBSv+HSBALxmmpIJykdCLRRePodc4+sk15fp651z3/mP2h/0dw/8A4Q+sCkutNLAi3bTpEXwtNvFa4Hn+9ZH4nEoTc9vv0kZiMTmOVbgHYf8AKBL4ooFOUDQX7/hK9ScAFju9zr0XoPnHHFGyUwpbxvv5DreQdXEX6nTbtAlXxubQHInU9TGNfFrsqj994wZyd5zACYAwhA6DaWnMIQCEIQCEIQCEIQC09BtFj8O0QgBMIQgegRVREli6EdoGvexzmShSpvQqsqMzBlLaA6WsT0/rPPa3Rwd6dWiye/LePIRqvdsul7zIQ/URwj3gfRPBqOFrYTPQ1ugazMWKkA3B7G4MzXjL4erd0cgjddiD5AyycA4rT4Y2GWsVSlXpeJ7fC+jDMR01PpKRz8MMMUz4WolRHGc5DmCkk5hcfX5wEMHSvVSwtZgPxGs2iouUfIT5/p4tkIIYi2olw4T7QqyjLVAqDvsw+m8C+4zEC2sgeIV7rb9mR9XnyhUYLkYLp4tL+enlH2JqK6gqfCRdSOogZlxOjZ3tsWvGZTSTPHKWWo3mR9pGOthtA5p1nTVHKnyJH2k7gec8ZTsBULDoGGYfrIaonh8rz1YGg8L9pjAAV6IJ6sh/HKf1lo4dz5g6lhnyHs62/GY01M3MSUaGB9C0OK0n+CojehBi3vVnzzhmYKpBK+Y0j/8A0xiOlV/qYCVeqrFAVa1wGyWzFb+K19M1r2v1l545yPRwtBMVRqPWQ21YKSAwGWwUC99u9yJReFLcZzoegmtezXjqsjYSqQQt3p5rW8JzMuvYjOP83aBXuN+zhTToZqrnGYgqiUgVCKfiqEnLfIiXJPUgW+ICKr7MuGK4wjY5/wCLK3yg0xra/wABUkaa5c9yIjg+f6dXji1XYDDqGw9Jjsob/eG+2ZwNdLKRfaX7ieE4gcVmoU8B7k2YVKlOo1RSAN8rjMbjQi2lu0DPuG+ymnU9/Qeu64qjta2R1YE0qgBGYKbFWF9CjDtIfkX2d/xYrviWahTosUNsoOdfjuWuAFA18z5GSXG+dauH4ulR6lGp7pRQrGgrKrIWLMpzO12Um+h+Jbd5Pe13mtKeGTDYdlJxQ947Lt7ptb3HVz11uA3cQIbgvsywrUmxeJxL0sMxvRzFEYoTZHqMwyqWuCFAvZhrc2Edzv7OFw9AYzB1jXw+ha5ViATYOrp4WW5A2Ft9Re1z4lw8cZ4ThxhqlNXpmmWViQodEKOjWBKkZiQbai3Q3iXGMOvC+BvhK1RXq1FZFAvYtUa5yg65VBJzEDUdCQIGEQhCAQhCAQhCAQhCB3n0tacQhAJ0k5hAVtB2ngM8aACSPC6GepTQf23A+pAkdLV7PsJ7zH4df5XzH/KCfygXL20qqphUA1Gb6AW/OZWCL6TQ/bTis2Lp0/5Kf4sx/SZuW1gObxNqlr9JznnFQ6QPaT26y3cu8fVEZHDMN1tqQeotKYrRzh62VgR6wJbEcVWpVLMCBc6bfXzkj/DBlBG15X6xzVGbub/WOkdhY9tvKA74xRyJpuSL+cjqbba+ceYniJICsLi/SGamxAB6dRA4ape84RST+UcPhVykjvEEJuddLQO0GgHrE2EXpUiUFjvD+HPWArQFhYRhxPHsGCoxGW92BIN2BBFxraxI+ZnkIEPJSlzBilT3a4quEAsEFVwtu2UNa3lCECLvFalVmtmYmwCi5JsBoAL7AdoQgL4HiVagS1GrUpMdCUdkJ9SpE4xuOq1mz1aj1G2zOzO1u12JNoQgNoQhAIQhAIQhAIQhAIQhAIQhABPQYQgeqNZpHsXwubGO9vgQ/ibfrCECD9pGL95xHEG/wsEH+VQPveVQQhAUMTcwhA4natCEB6jaeY+0fKLjzhCBy9OcPSnkIHvvHUWBuPOJJihfUdIQgSPDagKgXsbwqixOs8hA/9k=',
        genre:"Rock",
        audio:"All of Me.mp3"
        
    },

    {
        id:3,
        name:"Yummy",
        artist:"Justin Bieber",
        img:"data:image/jpeg;base64,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",
        genre:"Hip-Hop",
        audio:"Yummy.mp3"
    },

    {
        id:4,
        
        name:"Sugar",
        artist:"Maroon 5",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25UWoeWXmiKgzjFc9cT7ifowsg5rFwn4g2A&usqp=CAU",
        genre:"Pop",
        audio:"Sugar.mp3"
        
    },

    {
        id:5,
        name:"Locked Away",
        artist:"R. City",
        img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUPEBAQEBAQDw8PDw8PDw8PEBAQFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0ODw8PFSsZFRkrKysrLS0tLS0tKy0rNysrKysrKystLSstKy0rNysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABDEAACAQIDBAcFBQUGBwEAAAAAAQIDEQQhMQUSQVEGEzJhcZGxIlJygaEHI0LB8BQzQ7LhFWKSotHxJCVTY3OCwhb/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGxEBAQEBAQEBAQAAAAAAAAAAAAERAjESIUH/2gAMAwEAAhEDEQA/ALrY6ZAp3ZYijSkhxWHSAYew9hyBkhDiAQhCAQhCAaRBVJ5FesBTqsgZNUImaEbAYcgGEMwJMMjqNJNvJLXgQCwTntq9J4xe7RSnbWb7K8FxOcxO2MRN3dSS7o5IJa9Dc1zXmhlJPRp+DPMZVpPWUn/7MUMTNaTkvCTQw16cJnn2G27iYfxHJcpq/wAjd2f0pjJ7taO5/fWcfnyIOiKW1/3d9d1ptdxbp1FJKUWmno07pj1KalFxekk0Fc3QxEovey0du5lmnjXJptJeFzPrU2ovg4txab4p20JMCs1fmYdIrVklOUVwk7ClVSXmWqWHdSUrZWnK/PJkUMG95x0s8nwB+u46I0/uou2qOyorI5jorB9RDnY6ynHI3GU2HWRNYioLImKGEOIDlo08ydIjhAlIhCEPYBhx7CsUMIewgGFYcQDWHsIQAyK1YsTZBVAo1CJk1UhKiOQIcgWALOP6S7au3Rpv2VlOS4vkavSbanV0+rg/vJq2X4Y8zh3+vEJUbBaDaFYjERNA2JWgGiaoBXCaBLqtbYe2JUJWbvSeseC/vI7ulNSSlF3TV0zy86boftJqXUSeTzh3NcCLFjbFFxqv3antrx4r8wKDtZnQ47CqrBx0esXyZzUt6EnCatJfq67jNjpzVnB4Zqcpxdt+7tw8SfrHutSXtZq9tXzHwtVPysWJ23WzDp/Ha9HKX3cbe6vKx0UY5GX0fo2pQfOEfQ2N06OYqGhIBR0DKhDDjFHOBCsIIQSGQ4CEIQCEIQCEIcBhxCACaK9VFqRWrAUqxAT1iCxUDIjqSsm+SbJmY+2K7uqUbtvN2+hLciya4zaFSc6spyvdt5PguCKcjpdsYVqF3bfWdl7rOcmnxJLqdc4hsMkSxiTQoN6IVmRWcMgKkDXpYdLNoDEYVSWWpnWvljtAWLNSi1k0ROJWfETDw1ZwnGccnGSl5ClAZIuGvUMNVU4xmtJRT80PtDZsa0VfKS7M+Pg+4yeiNffw6i/4cpQXhwOmp6INSuEnKVOThLKUXZgYrHycXFccr9xvdJtnN/fxV7K1Rdy0kc2kmZ+f1r6e77PpWpx7oQ/lRasBhuxH4I/yolZoDS0DApaBlDCHGA5+ww41gh0ISHAQhCAQhCAQhD2AYcVhyAWVq5akVqxRQq6kJNV1IioFnK4nFy6x21ebdr5cEdNiexK3uu3kcfjISjUpyi3Z2jJox03wkWK3096V3pZqxk4ihd5I1sVBXyRVsZi9fqnSw9tS0krEsYIZwKkiBoUf9lzDdtLoGUWsmrriv9CKjnTvqirisHldGgnZcZR58UDJ5c1zLrNjAqQIma+Iopq9jMnTNRzsdN0Hk/vF3xdjt6eiON6E0GoSm9JS3V8js6eiKsDUWVtU9bnF7ZwHVTvHsTd0uT5HaTMvadBTg4vxXc+AaeoYbsR+CP8AKiRgYZexH4Y+iJGiKCmsgxqegQDDBMEDnxh2RuouZUGOQ9dHmh1XjzQEoiPro80C8TD3kBMIrvGQ95A/tkPeQRbHIqdVNXTuuZKRSEIQDMrViyyvWKM+rqRMlralbFVlBXk0uS4vuCINo1lGD/vZfLiznFDk21e6ui/XrOcrv5LkiGUTNailXRWaLlfMhUTLUDEjqTinaRP1LJVHdalZPJprmms0TVsZk6cNYPPvumWcNacbPtLXvAq7OoqEqirpTV92nuuN7vjwv4FfDN66MrMWasd13Wts1wfcQVJZXXlyLLd1+tSCpT46BbFWTK/VOclBK7bSSJq8bao2+juCsutks3lHuXMsYrX2dhlSpxpr8Ks+98Wa9PRFCOpoQ0RtDTM/EGhPQoYhZgemYfsx+GPoSMjw3Yj8MfQkMtQNPQIanoEUMMECB590wx06VODg7OU2n5HIS2xXf4vodL0+/d0//I/QzujOBhUi3NJ5o0531kf2nX95+QL2hX9+R3kNjUvdRJHY9L3UTT5rz79ur+/IB4mt70/qem0di0npBP5FuHRqPuRB8vJXWrc5/UhqYipbty8z1+ewKSy9n5K5UrdEsE4NKhdu7lNye/fmuRT5Z3RCTeGg275PXxOgjFvn5MgwuzeppqFBKFso76c0ZtTplUwtfqMZQUY2TVWm204v8aT4EbjcdCVr2dudhpwtFyeUYpuTs9Daw841oqcc4yScXe6aLFXBKdOVN5KUXHzViK4qjtijJ7qmov8AvNJP5lXG7cw0f4sW+ULz9DjMds+VKrOnJWcJSjmvIi6ol6xflu4vpJD+HCUu+bUV5LP0Meri5TlvSd+HcvAi6sdRzJejEnWvmN1zYE45AxAm1BaCiIysEnkNJt5EkLFXF17ac7IjaHE0X4hYeDeTWgdNSdrks1ZE0kU6tSzsvyRUq4x96ur88gq2rvo2SUFOS6mMY+27OW77XmdJjn1VROUmoqLvJpK3rY7PDU92MY+6kiLBYGFOKikm0u01m+8so0wKCzNCGiKENTQhoigZ6FKuXp6FGuB6XhuxH4I+hK9CPDdiPwR9CRmWoGGgVhoaBgCMEwQPM+n37un8b9Buh0Pu2+9D9PuxT+KXoH0RX3XzNsT10tGm3ks28l4nU4HY0IJOWdS2d9FfgkUNgYZfvWr8IePFmzZtmWlWrgurzjHeTeb4rwIep3s7vwZs01K2ZBOlZ+I0xlywpG6BqShwYLpDRlSpnE/afg1LDU6tlvU6m5fjuyTdvNHodSkcT9qOWEivfrR+iZYlQfZVtNzpSoNu9Fpw+CXDwuek06l8pKzt+rHi/wBl9Xdxjj79J8bZp3/M9ipVlez1eavkxYc+OW6fdGHWX7VRV6kV95FaziuK70eZrl/ufQNOzON6W9CVVbr4XdhVec6byhUfPuZmzW5XmKgC45lqtTnTk6dWLpzi7OE1uteHd36ELWZhtHNECLcyrez8TUZo1IeDIx7vRajE1I2Va+fyaaFKLTzu/mDuJ6SkvHMYsq1DaekZRje+tsifEzg1dZPlwMpwaybTXcQUqjTy0uZxfpNVj6/Q19gYR26x8co+HFlXZ+DdaaS7Kzm+SOxpYVJJJWSVklyNcxjqqDpsbcaNTqBv2c2yzYLM0IaIKWEVkyKopcMkvAAp6FGui1Fy0eZVxzUI702ktM3m3yQHpuG7Efgj6EjAw/Yj8EfQksRQwCBpaB2IphhxgPMenvZp+MvQ3ugGwpzoqdRONN5q+sl3f6mJ04in1SfGbT+h6xs+CjShGOSUIpWVuCNXxmejpUYxSjFWSVklwRNFch7BIy0a4NSN19R5sVN31JqonmC4klgZFRBUhc4D7V4f8LSfOrl47ruehN8fM87+16ralRp8JVJT8o/1NRmuQ+z6pbaFLX2lOP8Al/oe2qgmtU1yeqPDOhcrY+h31GrL4We0utuvJ5eDuvEtTnxY6mcew/k8yali+E1Z89URU8amTb0WRtBtbZGGxUN2tTjO3Zkspx74yWa/WR5/troHWpXlQl18FnZ2VVL0keidU12W0+7QONZ/iV++P+hmw8eGYik4+zJOMlrGSs14oz66Pd9p7Jw2JX3tOMnwl2Zrwepxe1vs81eHrd6hWX/1FfkJFt15pWxGdl8/EmpR4l/avRDHU3d4eUkvxU2qi+mf0M2PWU8qlOcfihKPqaxiX9T3/oDiKN7NOzIKj3s+XyLWz8NVrPdit5LWV7KPiwuqsqjStLLwL+wtiSrN1JXhTyztnLwN7AdH6aa3/bks89PI36eGSWSsuSGIoYXAxprdhFKKzy9X3ltIsU6d3YVSlYoh3QoUrsmjEOatktQKtZX08CB0b6aLiXo0W3nkvxP8g1Su7JeyuRBlOlu5vLicPtnH9dVuuxF7sF3XzfzOu6Y4jq6SpxynUy8ILV/rmcOqZNXHvuF/dx+CPog2BhuxH4I+iDYU0NAwKYRAzBCGA4raOx5YrEUKST3VJzqSS7MFb6npVKnupJaJJL5KxX2ZgVCCv22ryfeXkioFITDI5EqgauHFCS+o9iLoJIFxJKhE6lu8qI5rLI8v+1uft0I8o1H9UenTqcl4nlP2rzviKS5Um/ObNcs9Od6Iu2Ow7WvXL0Z71SmpK0kn4o8K6FUt7aFBf9xvyhJntlKVvMtTnwsZgI6xyKipzjnF3RsNXiUIys3F/LwI2gji5x7SLEcZF9wU6SauV5YVMiVZck+8jnfhJr6oqvDNaSaAlh5e8/NlBVqltXH5mDtnCRrrdtfPhkrd5qTw3O7/AF3ijRsijil0JjvX9lrPS68DRpbPhQh1UF325M6ObtFszYwu958QiDB0SzWp2RLSpixS4AVaUSTEQVh6ccwqqzsBFBZXBjFt3+SFUlw+RYpR3Y34t2Xi+ICVPgu/P8yxRo2Q8YJZeQO08YqVCdX3INrvlwXmRY8+6UV+txE+UH1cfk8/rcx5U0HUr88282+8gdQ5b+umPc8P2I/BH0QbAw3Yj8MfREjOjAaegQNPQIgYYcYDbp246cSxiMNu2lG7vZfMqo0MFWut12yzXgVAzwqVkn7T8lzYv2anfc3nvfmKFZOpvPTNLuJ5Ke9koW1u07kFang07xfaXk1wYOGw17uV0l+mPUrtTvdO2UrXs0SY+vaNlxV21y/qAEMNFrfk7R4eBHicJHd34O61fgSqPW0o7rSaSy8MglDq6Ti3du/1KMWtTe9lo/U8i+1CrvYyK92hBPue9JntEzxT7TZ32hPK1oU19DXLPSn0AS/tGjfnPz6tnsyj9DxjoIn/AGjQ+OX8jPbYx18WKceFhZ8GQ4+l+JarXwHi7Ms1I7y+RGlShO6EmVqbcJ24E9wCaI5tLXIU6qWpBJ72b0Wi594ASlxa8ERN3yCqZsNUrZgVa8LtR4avxKtWnb5GlCHF8ytVhqBHRjkQ4jORZjlErRV3cIVOJXrTzLTyTfJFCb48wAhK8rPmWq1e81BWyWb5d5SqyUPafFZPvRkVtoPSPF3lL3ijpVWc3l2Vx595yPTrbV2sLB5Re9Vtz4RNjD7X+6k1ZTjBtd7tyOIo7Fq1W5ynZybk5STzb1yIustzfMWZs/8A5uf/AFY/4WRS2FJfxF/h/qZxde24fsR+CP8AKg2BQXsx+GPog2CBp6BDQ0CAFjDsYDcURLL55eYhFD6D9bLm7ePAQgI7Ayd19BxBFbAV9VG9oey3fjyLbk3m3cYQATR4l9pEv+Y1V7vVx/yIQjXLPYfs7jfaNLuVR/5T2lLUQh0c+K1RcSxh53Q4jLantGl+Ir002MIqJo0XxzBrqyHEBVSzJXIYQDIgnHMYQEFd8Ad2whBEGMekOepSqchCKMfbGIvaHLNmWhCCDgjQTyzEIKCRSrCEQep0eyvhXoEOIjRoaDiEQIEcQH//2Q==',
        genre:"Pop",
        audio:"Locked Away.mp3"
        
    }
]

//Box-1
const allSongs= document.getElementsByClassName("all");
const rockSongs= document.getElementsByClassName("rock");
const popSongs= document.getElementsByClassName("pop");
const hiphop= document.getElementsByClassName("hip-hop");
const songContainer= document.getElementById("song-container");


//Box-3
const playlistName= document.getElementById("playlist-name");
const playlistBtn= document.getElementById("create-playlist");
const current= document.getElementById("current-playlist");
const allPlaylist= document.getElementById("all-playlists");

const cardDiv= document.getElementById("card-container");
const previous= document.getElementById("prev");
const next= document.getElementById("next");


const box2= document.getElementById("box-2");



function rockFunction(e)
{   songContainer.innerHTML="";
    
    const filtered= songs.filter((song)=>
   {   
     if(e.target.value=="All")
     {
        return true;
     }
     return song.genre==e.target.value;
   });



   filtered.forEach((song)=>
{
    
    CardBtn= document.createElement("button");
    CardBtn.classList.add("songs-btn");
    CardBtn.textContent=`${song.name}-${song.artist}`;
    songContainer.appendChild(CardBtn);
    

    CardBtn.addEventListener('click',()=>renderSong(song));

    


});
 

}




function renderSong(song)
{
    
   

    cardDiv.innerHTML="";
    const division= document.createElement("div");
    division.classList.add("card-elements");

    const image= document.createElement("img");
    image.classList.add("img-ele");
    image.src=song.img;

    const songName= document.createElement("h3");
    songName.classList.add("name-ele");
    songName.textContent=song.name;

    const artistName= document.createElement("h4");
    artistName.classList.add("artist-ele");
    artistName.textContent=song.artist;

    
    

    const audio= document.getElementById("play-audio");
    
    audio.src=song.audio;
    box2.appendChild(audio);

    cardDiv.appendChild(division);
     cardDiv.appendChild(image);
    cardDiv.appendChild(songName);
    cardDiv.appendChild(artistName); 
}

//To show all songss Initially
songs.forEach((song)=>
{
    
    const btn= document.createElement("button");
    btn.classList.add("songs-btn");
    btn.textContent=`${song.name}-${song.artist}`;
    songContainer.appendChild(btn);

    

    
});





//Playlist Creation
const Songsplaylist = document.createElement("div");

playlistBtn.addEventListener("click", () => {
   
    Songsplaylist.classList.add("songs-btn");
    Songsplaylist.textContent = playlistName.value;
    playlistName.value = "";
    allPlaylist.appendChild(Songsplaylist);
});
                
           
    



//Toggler Button
 const checkbox= document.getElementById("checkbox");

 checkbox.addEventListener('change',()=>
{
    //change the theme of website
    document.body.classList.toggle('dark');
});

//PRevious Song

let index=0;

previous.addEventListener('click',()=>
{
    if(index==0)
        {
            index=songs.length-1;
        }
    else if(index<=songs.length-1)
        {
            index--;
        }   
        
        renderSong(songs[index]);
})


next.addEventListener('click',()=>
{
    if(index==songs.length-1)
        {
            index=0;
        }
    else if(index>=0)
        {
            index++;
        }    
        renderSong(songs[index]);
})


//Searching Song 

const searchInput= document.getElementById("textSearchSong");
const searchBtn= document.getElementById("searchSong");

function Search()
{
    const searchValue= searchInput.value.toLowerCase();
    const filteredSongs = songs.filter(
        (song) =>
          song.name.toLowerCase().includes(searchValue)
      );


      songContainer.innerHTML="";


      filteredSongs.forEach((song)=>
        {
            
            CardBtn= document.createElement("button");
            CardBtn.classList.add("songs-btn");
            CardBtn.textContent=`${song.name}-${song.artist}`;
            songContainer.appendChild(CardBtn);
            
        
            CardBtn.addEventListener('click',()=>renderSong(song));
        
            
        
        
        });

        searchInput.value="";
         
         
}

searchBtn.addEventListener('click',Search);